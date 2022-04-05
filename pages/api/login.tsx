import { NextApiRequest, NextApiResponse } from 'next';
import { usersApi } from '@libs/api';
import { tokenSettings } from '@libs/token';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      data: { access_token },
    } = await usersApi.login(req.body);

    res.setHeader('Set-Cookie', tokenSettings(access_token));

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(401).json({ error });
  }
};
