import axios from 'axios';

const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

export const api = axios.create({
  headers: {
    Authorization: `token ${accessToken}`,
  },
  baseURL: 'https://api.github.com',
});
