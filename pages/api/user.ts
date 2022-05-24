import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '@libs/server/withHandler';
import { usersApi } from '@libs/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    cookies: { token },
  } = req;

  if (!token)
    return res.status(401).json({ ok: false, token: null, profile: null });

  const { data: profile } = await usersApi.myInfos(token);
  return res.status(200).json({ ok: true, token, profile });
};

export default withHandler({ method: 'GET', handler });
