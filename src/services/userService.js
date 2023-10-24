import axios from 'axios';

const base_url = 'https://0f7d-94-241-173-114.ngrok-free.app/';
const api_string = 'api/v1/';

const headers = {
    'Bypass-Tunnel-Reminder': 'bla-bla',
    'ngrok-skip-browser-warning': 'bla-bla',
}

const userService = {
    checkUser: (user_id) => {
        return axios.get(`${base_url}${api_string}users/check/${user_id}`, {
            headers: headers
        })
        .then(response => response.data)
        .catch(error => {
            console.error('Ошибка при запросе checkUser:', error);
        });
    },

    createUser: (user_data) => {
        return axios.post(`${base_url}${api_string}users/create/`, user_data, {
            headers: headers
        })
        .then(response => response.data)
        .catch(error => {
            console.error('Ошибка при запросе createUser:', error);
        });
    },

    getUserData: (user_id) => {
        return axios.get(`${base_url}${api_string}users/${user_id}`, {
            headers: headers
        })
        .then(response => response.data)
        .catch(error => {
            console.error('Ошибка при запросе getUserData:', error);
        });
    },
};

export default userService;
