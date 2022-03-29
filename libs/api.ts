import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

interface ISignup {}

export const signUpApi = {
  // checkId: (data) => api.get('users/signup/check_id/', { params: data }),

  getCode: (phoneNum: string) =>
    api.post('users/code_gen/', { phone_number: phoneNum }),

  // checkCertification: (data) =>
  //   api.get('users/signup/sms_authentication/', { params: data }),

  signup: ({
    name,
    nickname,
    phoneNum,
    username,
    password,
    marketing,
  }: {
    name: string;
    nickname: string;
    phoneNum: string;
    username: string;
    password: string;
    marketing: boolean;
  }) =>
    api.post('users/signup/', {
      name,
      nickname,
      phone_number: phoneNum,
      username,
      password,
      ad_agree: marketing,
    }),
};
