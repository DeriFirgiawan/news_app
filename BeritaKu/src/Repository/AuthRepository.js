import { Axios as axios } from '@Config/Axios';

export const apiPostLogin = (email, password) => {
  return axios.post(`/api/auth/login?email=${email}&password=${password}`);
};

export const apiPostRegister = (name, email, password, is_premium) => {
  return axios.post(`/api/auth/register?name=${name}&email=${email}&password=${password}&is_premium=${is_premium}`);
};
