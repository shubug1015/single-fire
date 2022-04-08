import { NextApiRequest, NextApiResponse } from 'next';
import { usersApi } from '@libs/api';
import { tokenSettings } from '@libs/token';
import { useRouter } from 'next/router';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { type } = req.body;
  try {
    // 일반 로그인
    if (type === 'normal') {
      const {
        data: { access_token },
      } = await usersApi.login(req.body);

      res.setHeader('Set-Cookie', tokenSettings(access_token));
      return res.status(200).json({ ok: true });
    }
    // 카카오 로그인
    else if (type === 'kakao') {
      const { data } = await usersApi.kakaoLogin(req.body);

      return res.status(200).json({ ok: true, data });
    }
  } catch (error) {
    return res.status(401).json({ error });
  }
};
