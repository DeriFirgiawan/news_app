import { Axios as axios } from '@Config/Axios';

export const getProfile = () => {
  return axios.get('/api/my/profile');
};

export const createNews = (id, title, body) => {
  return axios.post(`/api/post/news?id=${id}&title=${title}&body=${body}`);
};
