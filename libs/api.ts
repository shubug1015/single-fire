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
  loginNextApi: (req: IProps) => axios.post('/api/login/', req),
  // 로그인
  login: ({ username, password }: IProps) =>
    api.post('users/login/', {
      login_method: 'normal',
      username,
      password,
    }),
  // 카카오 로그인
  kakaoLogin: ({ id }: IProps) =>
    api.post('users/login/', {
      login_method: 'kakao',
      kakao_id: id,
    }),
  // 로그아웃(NextJS api)
  logoutNextApi: () => axios.post('/api/logout'),

  // 마이페이지 내 정보
  myInfos: (token: string) =>
    api.get('/mypage/', {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  // 마이페이지 회원 정보 수정
  editInfos: ({
    name,
    nickname,
    phoneNum,
    password,
    marketing,
    token,
  }: IProps) =>
    api.post(
      '/mypage/',
      {
        name,
        nickname,
        phone_number: phoneNum,
        password,
        ad_agree: marketing,
      },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    ),

  // 마이페이지 내 강의 리스트
  myLectureList: ({ page, token }: IProps) =>
    api.get(`/mypage/registered_lecture?page=${page}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  // 마이페이지 내 강의 수강
  myLectureDetail: ({ id, token }: IProps) =>
    api.get(`/lectures/registered_lecture/${id}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  // 마이페이지 커뮤니티 리스트
  myCommunityList: ({ page, token }: IProps) =>
    api.get(`/mypage/community?page=${page}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  // 마이페이지 쿠폰 리스트
  myPurchaseList: (token: string) =>
    api.get(`/mypage/payment/`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  // 마이페이지 쿠폰 리스트
  myCouponList: (token: string) =>
    api.get(`/mypage/coupon/`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  // 마이페이지 포인트 리스트
  myPointList: (token: string) =>
    api.get(`/mypage/point/`, {
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
    category,
    page,
    orderType,
    searchType,
    searchTerm,
  }: IProps) =>
    api.get(
      `community/${category}?page=${page}&filter_keyword=${orderType}&search_keyword=${searchType}&search=${
        searchTerm || ''
      }`
    ),

  detail: ({ category, id }: IProps) => api.get(`community/${category}/${id}/`),
};

export const purchaseApi = {
  myData: (token: string) =>
    api.get('payment/user/', {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),
};

// payment/user/
