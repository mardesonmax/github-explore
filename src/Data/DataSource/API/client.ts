import axios from 'axios';

const accessToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

export const client = axios.create({
  headers: {
    Authorization: `token ${accessToken}`,
  },
  baseURL: 'https://api.github.com',
});
