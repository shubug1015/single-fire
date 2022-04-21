import withHandler from '@libs/server/withHandler';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    'Set-Cookie',
    serialize('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      expires: new Date(0),
      sameSite: 'strict',
      path: '/',
    })
  );
  return res.status(200).json({ ok: true });
};

export default withHandler({ method: 'POST', handler });
