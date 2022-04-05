import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', `token=; path=/; expires=-1`);
  res.statusCode = 200;
  res.json({ ok: true });
};
