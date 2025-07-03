import useSWR from 'swr';

import { fetcher } from '~/utils/fetching';

type Podcaster = {
   _id: string;
   name: string;
   avatar: string;
   totalPodcasts: number;
};

export default function usePodcast(type: string) {
   const URL = `http://localhost:3000/main/podcaster/${type}/`;

   return useSWR<Podcaster[]>(URL, fetcher);
}
