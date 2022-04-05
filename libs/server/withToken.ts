import { tokenSettings } from '@libs/token';
import { NextApiRequest, NextApiResponse } from 'next';

export default function withToken(
  fn: (req: NextApiRequest, res: NextApiResponse) => any
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', tokenSettings(fn(req, res)));

    return res.status(200).json({ ok: true });
  };
}
