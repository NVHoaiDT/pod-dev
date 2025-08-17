import useSWR from 'swr';

import { fetcher } from '~/utils/fetching';

type Podcast = {
   _id: string;
   title: string;
   thumbnailSrc: string;
   thumbnailAlt: string;
   audioSrc: string;
   totalListened: number;
   author: string;
};

export default function usePodcast(category: string) {
   const URL = `https://pod-dev-server.vercel.app/main/podcast/${category}/`;

   return useSWR<Podcast[]>(URL, fetcher);
}
