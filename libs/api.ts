import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

interface IProps {
  [key: string]: any;
}

export const usersApi = {
  // 인증번호 발급
  getCode: (phoneNum: string) =>
    api.post('users/code_gen/', { phone_number: phoneNum }),

  // 인증번호 확인
  checkCode: (phoneNum: string, code: number) =>
    api.get(`users/code_auth/`, { params: { phone_number: phoneNum, code } }),

  // 회원가입(NextJS api)
  signupNextApi: ({
    name,
    nickname,
    phoneNum,
    username,
    password,
    marketing,
  }: IProps) =>
    api.post('users/signup/', {
      name,
      nickname,
      phone_number: phoneNum,
      username,
      password,
      ad_agree: marketing,
    }),

  // 회원가입
  signup: ({
    name,
    nickname,
    phoneNum,
    username,
    password,
    marketing,
  }: IProps) =>
    api.post('users/signup/', {
      name,
      nickname,
      phone_number: phoneNum,
      username,
      password,
      ad_agree: marketing,
    }),

  // 로그인(NextJS api)
  loginNextApi: ({ username, password }: IProps, type?: string) =>
    axios.post('/api/login/', {
      username,
      password,
    }),
  // 로그인
  login: ({ username, password }: IProps, type?: string) =>
    api.post('users/login/', {
      username,
      password,
    }),
  // 로그아웃(NextJS api)
  logoutNextApi: () => axios.post('/api/logout'),

  // 마이페이지 내 강의 리스트
  myLectureList: ({ page, token }: IProps) =>
    api.get(`/mypage/registered_lecture?page=${page}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  myLectureDetail: ({ id, token }: IProps) =>
    api.get(`/lectures/registered_lecture?registered_pk=${id}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),
};

export const lecturesApi = {
  // 메인페이지 Best & Top3 강의 리스트
  mainLectureList: () => api.get('cms/main/'),

  // 클래스 Best 페이지 Top3 강의 리스트
  topLectureList: () => api.get('cms/class/'),

  // 카테고리별 강의 리스트
  lectures: ({ category, page }: IProps) =>
    api.get(`lectures?category=${category}&page=${page}`),

  // 강의 상세
  detail: (id: string) => api.get(`lectures/${id}/`),

  // 강사 리스트
  tutorList: (page: string) => api.get(`lectures/tutor?page=${page}`),
};

export const communityApi = {
  communities: ({
    community,
    page,
    orderType,
    searchType,
    searchTerm,
  }: IProps) =>
    api.get(
      `community/${community}?page=${page}&filter_keyword=${orderType}&search_keyword=${searchType}&search=${
        searchTerm || ''
      }`
    ),

  detail: (id: string) => api.get(`community/${id}/`),
};
