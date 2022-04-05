// import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: boolean;
}
type UseMutationResult<T> = [(req?: any) => void, UseMutationState<T>];

interface UseMutationProps {
  req?: any;
  redirect?: boolean;
}

export default function useMutation<T = any>(
  // url: string,
  fn?: any
): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const router = useRouter();

  const mutation = async ({ req, redirect }: UseMutationProps) => {
    setState((prev) => ({ ...prev, loading: true }));

    try {
      const { data } = await fn(req);
      setState((prev) => ({ ...prev, data }));
      if (redirect) {
        router.back();
        // router.push('/');
      }
    } catch {
      setState((prev) => ({ ...prev, error: true }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };
  return [mutation, { ...state }];
}
