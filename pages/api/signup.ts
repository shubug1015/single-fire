import { NextApiRequest, NextApiResponse } from 'next';
import { usersApi } from '@libs/api';
import { tokenSettings } from '@libs/token';
import withHandler from '@libs/server/withHandler';
import { serialize } from 'cookie';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { type } = req.body;
  try {
    if (type === 'normal') {
      const {
        data: { access_token },
      } = await usersApi.signup(req.body);

      res.setHeader(
        'Set-Cookie',
        serialize('token', access_token, tokenSettings)
      );
      return res.status(200).json({ ok: true });
    } else {
      const {
        data: { access_token },
      } = await usersApi.snsSignup(req.body);

      res.setHeader(
        'Set-Cookie',
        serialize('token', access_token, tokenSettings)
      );
      return res.status(200).json({ ok: true });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default withHandler({ method: 'POST', handler });
