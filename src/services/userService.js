import config from './config';

const headers = {
    'Bypass-Tunnel-Reminder': 'bla-bla',
    'ngrok-skip-browser-warning': 'bla-bla',
}

const userServiceOLD = {
  fetchUserData(user_id) {
      const url = `${config.API_URL}${config.API_VERSION}/users/${user_id}/`;
    
      return fetch(url, { headers })
        .then(function (response) {
          if (response.ok) {
            return response.json();
          } else if (response.status === 404) {
              throw new Error('Пользователь не найден');
          } else {
              console.error('Ошибка при запросе fetch user data', response.statusText);
              throw new Error('Ошибка при запросе fetch user data');
          }
        })
        .catch(function (error) {
          console.error('Произошла ошибка при выполнении запроса:', error);
          throw error;
        });
  },
    
  createUser: (user_data) => {
      const url = `${config.API_URL}${config.API_VERSION}/users/create/`;
    
      const response = fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user_data),
      })
        .then(function (response) {
          if (response.ok) {
            console.info(`[${response.status}] Пользователь успешно создан!`)
            return response.json();
          } else {
            console.error(`[${response.status}] При выполнении POST запроса произошла ошибка: `, response.text());
          }
        })
        .catch(function (error) {
          console.error('Произошла ошибка при выполнении запроса:', error);
          throw error;
        });
    },
};

class UserService {
  static async checkUser(user_id) {
    const url = `${config.API_URL}${config.API_VERSION}/users/check/${user_id}`;
    try {
      const response = await fetch(url, { headers });
      if (response.ok) {
        return true;
      } else if (response.status == 404) {
        return false;
      } else {
        throw new Error('Network Error!');
      }
    } catch (error) {
      throw error
    }
  }

  static async fetchUserData(user_id) {
    const url = `${config.API_URL}${config.API_VERSION}/users/${user_id}/`;
    try {
      const response = await fetch(url, { headers });
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`[${response.status}] Ошибка при получении данных пользователя.`);
      }
    } catch (error) {
      throw error;
    }
  }

  static async createUser(user_data) {
    const url = `${config.API_URL}${config.API_VERSION}/users/create/`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // ! Ключ авторизации
        body: JSON.stringify(user_data),
      })
      if (response.ok) {
        return response.json;
      } else {
        throw new Error(`Ошибка при создании пользователя.`)
      }
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
