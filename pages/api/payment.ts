import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function payment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { imp_uid, merchant_uid, imp_success } = req.body;
  try {
    // 액세스 토큰(access token) 발급 받기
    const getToken = await axios({
      url: 'https://api.iamport.kr/users/getToken',
      method: 'post', // POST method
      headers: {
        'Content-Type': 'application/json',
      }, // "Content-Type": "application/json"
      data: {
        imp_key: process.env.IMP_KEY, // REST API 키
        imp_secret: process.env.IMP_SECRET, // REST API Secret
      },
    });
    const { access_token } = getToken.data.response; // 인증 토큰

    // imp_uid로 아임포트 서버에서 결제 정보 조회
    const getPaymentData = await axios({
      url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
      method: 'get', // GET method
      headers: { Authorization: access_token }, // 인증 토큰 Authorization header에 추가
    });
    const paymentData = getPaymentData.data.response; // 조회한 결제 정보

    // 결제 검증하기
    // const { amount, status } = paymentData;
    return res.json(paymentData);
  } catch (e) {
    console.log(e);
  }
}
