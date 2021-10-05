import axios from 'axios';

// URL  FILMS EM CARTAGE:

// https://api.themoviedb.org/3/

// movie/now_playing &language=pt-BR&page=1

 export const key = '8a25ce610bf216ca6d9249236f39afcc'

 const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
 })

export default api;

