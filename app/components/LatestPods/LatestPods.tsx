import React from 'react';

import styles from './LatestPods.module.css';
import LinkButton from '../LinkButton/LinkButton';
import PodCastRow from '../PodcastRow/PodcastRow';
import useSWR from 'swr';

type Podcast = {
   _id: string;
   podName: string;
   imgSrc: string;
   imgAlt: string;
   author: string;
};

const ENDPOINT = 'http://localhost:3000/main/podcast/latest/';
async function fetcher(endpoint: string) {
   const response = await fetch(endpoint);
   const json = await response.json();

   return json;
}

export default function LatestPods() {
   const { data, error, isLoading } = useSWR<Podcast[]>(
      ENDPOINT,
      fetcher
   );

   if (error) return <div>failed to load</div>;
   if (isLoading) return <div>loading...</div>;

   return (
      <section>
         <header className={styles.header}>
            <h2>Latest Podcasts</h2>
            <div className={styles.actions}>
               <LinkButton>Sort</LinkButton>
               <LinkButton href="/latest-pods">Podcast</LinkButton>
            </div>
         </header>

         <ul>
            {data?.map((podcast) => (
               <PodCastRow
                  key={podcast._id}
                  thumbnailSrc={podcast.imgSrc}
                  title={podcast.podName}
                  author={podcast.author}
                  totalPlay={100}
                  lenght={100}
               />
            ))}
         </ul>
      </section>
   );
}
