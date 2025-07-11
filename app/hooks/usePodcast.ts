import useSWR from 'swr';

import { fetcher } from '~/utils/fetching';
import formatSeconds from '~/helpers/format-time';
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
   const URL = `http://localhost:3000/main/podcast/${category}/`;

   return useSWR<Podcast[]>(URL, fetcher);
}
