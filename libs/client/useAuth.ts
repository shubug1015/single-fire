import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

interface IProfile {
  [key: string]: any;
}

export interface AuthResponse {
  ok: boolean;
  token: string | null;
  profile: IProfile | null;
}

interface IProps {
  isPrivate: boolean;
}

export const useAuth = ({ isPrivate }: IProps) => {
  const { data, error, mutate } = useSWR<AuthResponse>('/api/auth');
  const router = useRouter();

  useEffect(() => {
    if (data && data.token && data.profile && !isPrivate) {
      router.replace('/');
    }

    if (data && !data.token && !data.profile && isPrivate) {
      router.replace('/login');
    }
  }, [data, router]);

  return {
    isLoading: !data && !error,
    token: data?.token,
    profile: data?.profile,
    mutate,
  };
};
