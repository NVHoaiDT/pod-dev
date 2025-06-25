import useSWR from 'swr';

import { fetcher } from '~/utils/fetching';

type Podcast = {
   _id: string;
   podName: string;
   imgSrc: string;
   imgAlt: string;
   author: string;
};

export default function usePodcast(category: string) {
   const URL = `http://localhost:3000/main/podcast/${category}/`;

   return useSWR<Podcast[]>(URL, fetcher);
}
