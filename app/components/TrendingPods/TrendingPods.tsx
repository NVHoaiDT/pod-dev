import * as React from 'react';
import useSWR from 'swr';

import styles from './TrendingPods.module.css';
import PodcastCard from '../PodcastCard';

type Podcast = {
   podName: string;
   imgSrc: string;
   imgAlt: string;
   author: string;
};

const ENDPOINT = 'http://localhost:3000/sample';
async function fetcher(endpoint: string) {
   const response = await fetch(endpoint);
   const json = await response.json();
   return json;
}

function TrendingPods() {
   const { data, error, isLoading } = useSWR<Podcast[]>(
      ENDPOINT,
      fetcher
   );

   if (error) return <div>failed to load</div>;
   if (isLoading) return <div>loading...</div>;

   console.log(data);
   return (
      <section>
         <h2>Trending Podcasts</h2>
         <ul className={styles.row}>
            {data?.map(({ podName, imgSrc, imgAlt, author }) => (
               <PodcastCard
                  key={podName}
                  imgSrc={imgSrc}
                  imgAlt={imgAlt}
                  podName={podName}
                  author={author}
               />
            ))}
         </ul>
      </section>
   );
}

export default TrendingPods;
