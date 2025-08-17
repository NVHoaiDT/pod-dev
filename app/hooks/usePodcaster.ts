import useSWR from 'swr';

import { fetcher } from '~/utils/fetching';

type Podcaster = {
   _id: string;
   name: string;
   avatar: string;
   totalPodcasts: number;
};

export default function usePodcast(type: string) {
   const URL = `https://pod-dev-server.vercel.app/main/podcaster/${type}/`;

   return useSWR<Podcaster[]>(URL, fetcher);
}
