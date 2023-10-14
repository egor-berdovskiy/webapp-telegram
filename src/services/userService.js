import axios from 'axios';

const base_url = 'https://44cc-94-241-173-114.ngrok-free.app/'
const api_string = 'api/v1/'

const userService = {
    checkUser: (user_id) => {
        return axios.get(`${base_url}${api_string}users/check/${user_id}`, {
            headers: {
                'Bypass-Tunnel-Reminder': 'bla-bla',
            }
        });
    },

    createUser: (user_data) => {
        return axios.post(`${base_url}${api_string}users/create/`, user_data, {
            headers: {
                'Bypass-Tunnel-Reminder': 'bla-bla',
            }
        });
    },

    getUserData: (user_id) => {
        return axios.get(`${base_url}${api_string}users/${user_id}`, {
            headers: {
                'Bypass-Tunnel-Reminder': 'bla-bla',
            }
        });
    },

};

export default userService;
