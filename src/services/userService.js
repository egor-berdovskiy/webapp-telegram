import axios from 'axios';

const base_url = 'https://0f7d-94-241-173-114.ngrok-free.app/';
const api_string = 'api/v1/';

const headers = {
    'Bypass-Tunnel-Reminder': 'bla-bla',
    'ngrok-skip-browser-warning': 'bla-bla',
}

const userService = {
    checkUser: (user_id) => {
        const url = `${base_url}${api_string}users/check/${user_id}`;
        
        return axios.get(url, { headers })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Ошибка при запросе checkUser:', error);
            });
    },

    createUser: (user_data) => {
        const url = `${base_url}${api_string}users/create/`;

        return axios.post(url, user_data, { headers })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Ошибка при запросе createUser:', error);
            });
    },

    getUserData: (user_id) => {
        const url = `${base_url}${api_string}users/${user_id}`;

        return axios.get(url, { headers })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Ошибка при запросе getUserData:', error);
            });
    },
};

export default userService;
