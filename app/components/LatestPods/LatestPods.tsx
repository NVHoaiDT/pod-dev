import React from 'react';
import usePodcast from '~/hooks/usePodcast';

import styles from './LatestPods.module.css';
import LinkButton from '../LinkButton/LinkButton';
import PodCastRow from '../PodcastRow/PodcastRow';

import formatSeconds from '~/helpers/format-time';

async function fetcher(endpoint: string) {
   const response = await fetch(endpoint);
   const json = await response.json();

   return json;
}

export default function LatestPods() {
   const { data, error, isLoading } = usePodcast('latest');

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
            {data?.map(
               ({
                  _id,
                  title,
                  thumbnailAlt,
                  thumbnailSrc,
                  totalListened,
               }) => (
                  <PodCastRow
                     key={_id}
                     thumbnailSrc={thumbnailSrc}
                     thumbnailAlt={thumbnailAlt}
                     title={title}
                     // this one should be handled latter...
                     author={'TEMP'}
                     totalListened={totalListened}
                     lenght={formatSeconds(totalListened).toString()}
                  />
               )
            )}
         </ul>
      </section>
   );
}
