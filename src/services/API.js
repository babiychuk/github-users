import axios from 'axios';

export const users = {
  list: (per_page) => axios.get(`https://api.github.com/users?per_page=${per_page}`),
  profile: (user_name) => axios.get(`https://api.github.com/users/${user_name}`),
};