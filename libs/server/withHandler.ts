import { tokenSettings } from '@libs/token';
import { NextApiRequest, NextApiResponse } from 'next';

interface IProps {
  method: 'POST' | 'GET';
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
}

export default function withHandler({ method, handler }: IProps) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method && method !== req.method) {
      return res.status(405).end();
    }

    try {
      handler(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
