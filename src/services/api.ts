import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.linkyouweb.com.br/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})
