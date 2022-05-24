import axios from 'axios';

// export const API_URL = 'http://127.0.0.1:8000';
export const API_URL = 'https://api.xn--o22bp6a0zk.com';

const api = axios.create({
  baseURL: API_URL,
});

interface IProps {
  [key: string]: any;
}

export const usersApi = {
  // 인증번호 확인
  checkId: (username: string) =>
    api.get(`/users/check_id?username=${username}`),

  // 회원가입 인증번호 발급
  getSignupCode: (phoneNum: string) =>
    api.post('/users/signup_code_gen/', {
      phone_number: phoneNum,
    }),

  // 인증번호 발급
  getCode: (phone_number: string, username?: string) =>
    api.post('/users/code_gen/', {
      phone_number,
      ...(username && { username }),
    }),

  // 인증번호 확인
  checkCode: (phone_number: string, code: string) =>
    api.get('/users/code_auth/', {
      params: {
        phone_number,
        code,
      },
    }),

  // 회원가입(NextJS api)
  signupNextApi: (req: IProps) => axios.post('/api/signup', req),

  // 회원가입
  signup: ({ name, nickname, phoneNum, username, password, adAgree }: IProps) =>
    api.post('/users/signup/', {
      name,
      nickname,
      phone_number: phoneNum,
      username,
      password,
      ad_agree: adAgree,
    }),

  // 로그인(NextJS api)
  loginNextApi: (req: IProps) => axios.post('/api/login', req),
  // 로그인
  login: ({ username, password }: IProps) =>
    api.post('/users/login/', {
      login_method: 'normal',
      username,
      password,
    }),
  // 카카오 로그인
  kakaoLogin: ({ id }: IProps) =>
    api.post('/users/login/', {
      login_method: 'kakao',
      kakao_id: id,
    }),
  // 로그아웃(NextJS api)
  logoutNextApi: () => axios.post('/api/logout'),

  // 아이디 찾기
  findId: (phoneNum: string) =>
    api.get(`/users/find_username/?phone_number=${phoneNum}`),

  // 비밀번호 재설정
  resetPw: (username: string, password: string) =>
    api.post('/users/change_password/', { username, password }),

  // 마이페이지 내 정보
  myInfos: (token: string) =>
    api.get('/mypage/', {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  // 마이페이지 회원 정보 수정
  editInfos: ({ name, nickname, phoneNum, password, adAgree, token }: IProps) =>
    api.post(
      '/mypage/',
      {
        ...(name && { name }),
        ...(nickname && { nickname }),
        ...(phoneNum && { phone_number: phoneNum }),
        ...(password && { password }),
        ad_agree: adAgree,
      },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    ),

  // 마이페이지 내 강의 리스트
  myLectureList: (page: string, token: string) =>
    api
      .get(`/mypage/registered_lecture?page=${page}`, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data),

  // 마이페이지 커뮤니티 리스트
  myCommunityList: (page: string, token: string) =>
    api
      .get(`/mypage/community?page=${page}`, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data),

  // 마이페이지 구매 리스트
  myPurchaseList: (page: string, token: string) =>
    api
      .get(`/mypage/payment?page=${page}`, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data),

  // 마이페이지 쿠폰 리스트
  myCouponList: (page: string, token: string) =>
    api
      .get(`/mypage/coupon?page=${page}`, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data),

  // 마이페이지 포인트 리스트
  myPointList: (page: string, token: string) =>
    api
      .get(`/mypage/point?page=${page}`, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data),
};

export const lecturesApi = {
  // 메인페이지
  mainLectureList: () => api.get('/cms/main/').then((res) => res.data),

  // 클래스 Best 페이지 Top3 강의 리스트
  topLectureList: () => api.get('/cms/class/').then((res) => res.data),

  // 카테고리별 강의 리스트
  lectureList: (category: string, page: string) =>
    api
      .get(`/lectures?category=${category}&page=${page}`)
      .then((res) => res.data),

  // 강의 상세
  detail: (id: string) => api.get(`/lectures/${id}/`).then((res) => res.data),

  // 강의 상세 리뷰쓰기
  writeReview: (id: string, text: string, token: string) =>
    api.post(
      '/lectures/review/',
      {
        lecture_pk: id,
        text,
      },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    ),

  // 강사 리스트
  tutorList: (page: string) =>
    api.get(`/lectures/tutor?page=${page}`).then((res) => res.data),

  // 마이페이지 내 강의 수강
  myLectureDetail: (id: string, token: string) =>
    api
      .get(`/lectures/registered_lecture/${id}/`, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data),

  // 강의 수강완료
  finishLecture: ({ id, order, token }: IProps) =>
    api.post(
      `/lectures/registered_lecture/${id}/`,
      { order },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    ),
};

export const communityApi = {
  communityList: () => api.get('/community/').then((res) => res.data),

  communityBoard: ({
    category,
    page,
    orderType,
    searchType,
    searchTerm,
    token,
  }: IProps) =>
    api
      .get(
        `/community/${category}?page=${page}&filter_keyword=${orderType}&search_keyword=${searchType}&search=${
          searchTerm || ''
        }`,
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => res.data),

  detail: ({ category, id }: IProps) =>
    api.get(`/community/${category}/${id}/`).then((res) => res.data),
};

export const purchaseApi = {
  // 결제페이지 내 정보
  myData: (token: string) =>
    api.get('/payment/user/', {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  // 결제
  purchase: ({
    type,
    payMethod,
    lectureId,
    price,
    totalPrice,
    point,
    coupon,
    orderId,
    token,
  }: IProps) =>
    api.post(
      '/payment/',
      {
        type,
        method: payMethod,
        lecture_pk: lectureId,
        price,
        payment: totalPrice,
        ...(point && point > 0 && { point }),
        ...(coupon && { coupon_pk: coupon }),
        payment_id: orderId,
        token,
      },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    ),
};

// payment/user/
