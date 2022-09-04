import useSWR from 'swr';
import type { Post as IPost } from '@prisma/client';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface PostHook {
  isLoading: boolean;
  error?: any;
  data?: IPost[] | undefined;
}

export default function usePosts(): PostHook {
  const { data, error } = useSWR<IPost[]>('/api/posts', fetcher, {
    shouldRetryOnError: true,
    errorRetryCount: 3,
    errorRetryInterval: 3_000
  });

  if (error) return { isLoading: !1, error, data: [] };

  if (!data) return { isLoading: !1 };

  return { data, isLoading: !0 };
}
