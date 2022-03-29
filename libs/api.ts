import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

export const signUpApi = {
  // checkId: (data) => api.get('users/signup/check_id/', { params: data }),

  getCode: (phoneNum: string) =>
    api.post('users/code_gen/', { phone_number: phoneNum }),

  // checkCertification: (data) =>
  //   api.get('users/signup/sms_authentication/', { params: data }),

  // signUp: (data) => api.post('users/signup/', data),
};
