import { Axios as axios } from '@Config/Axios';

export const getListNews = () => {
  const res =  axios.get('/api/all/news');
  return res;
};

export const searchNews = value => {
  return axios.get(`/api/all/news?search=${value}`);
};

export const getNewsById = id => {
  return axios.get(`/api/news/${id}`);
};
