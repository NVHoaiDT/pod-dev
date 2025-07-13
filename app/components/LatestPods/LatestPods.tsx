import React from 'react';
import usePodcast from '~/hooks/usePodcast';

import styles from './LatestPods.module.css';
import LinkButton from '../LinkButton/LinkButton';
import PodCastRow from '../PodcastRow/PodcastRow';

import formatSeconds from '~/helpers/format-time';

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

         <ul className={styles.list}>
            {data?.map(
               ({
                  _id,
                  title,
                  author,
                  thumbnailAlt,
                  thumbnailSrc,
                  audioSrc,
                  totalListened,
               }) => (
                  <PodCastRow
                     key={_id}
                     thumbnailSrc={thumbnailSrc}
                     thumbnailAlt={thumbnailAlt}
                     audioSrc={audioSrc}
                     title={title}
                     author={author}
                     totalListened={totalListened}
                     lenght={formatSeconds(totalListened).toString()}
                  />
               )
            )}
         </ul>
      </section>
   );
}
