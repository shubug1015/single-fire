import { atom } from 'recoil';

type Token = string | null;

export const tokenAtom = atom<Token>({
  key: 'token',
  default: null,
});
