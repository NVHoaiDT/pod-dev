import useSWR from 'swr';

type Podcast = {
   _id: string;
   podName: string;
   imgSrc: string;
   imgAlt: string;
   author: string;
};

async function fetcher(endpoint: string) {
   const response = await fetch(endpoint);
   const json = await response.json();

   return json;
}
export default function usePodcast(category: string) {
   const URL = `http://localhost:3000/main/podcast/${category}/`;

   return useSWR<Podcast[]>(URL, fetcher);
}
