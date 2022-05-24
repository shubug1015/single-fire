import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

interface IProps {
  isPrivate?: boolean;
}

interface IProfile {
  [key: string]: any;
}

export interface IUser {
  ok: boolean;
  token: string | null;
  profile: IProfile | null;
}

export const useUser = ({ isPrivate = false }: IProps) => {
  const { data, error, mutate } = useSWR<IUser>('/api/user');
  const router = useRouter();

  useEffect(() => {
    if (data && data.token && data.profile && !isPrivate) {
      router.back();
    }

    if (data && !data.token && !data.profile && isPrivate) {
      router.push('/login');
    }
  }, [data, router]);

  return {
    isLoading: !data && !error,
    token: data?.token,
    profile: data?.profile,
    mutate,
  };
};
