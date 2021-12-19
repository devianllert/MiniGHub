import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/graphql',
  timeout: 1000 * 10,
});
