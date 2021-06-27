import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0/',
});
export const key = 'fbfa7ee7a25e42f98424a5f9f2f76fb7';
