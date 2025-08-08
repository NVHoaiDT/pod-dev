import * as React from 'react';

import usePodcast from '~/hooks/usePodcast';

import styles from './TrendingPods.module.css';
import TrendingPodcastCard from '../TrendingPodcastCard';

function TrendingPods() {
   const { data, error, isLoading } = usePodcast('trending');

   if (error) return <div>failed to load</div>;
   if (isLoading) return <div>loading...</div>;

   return (
      <section className={styles.section}>
         <h3>Trending Podcasts</h3>
         <ul className={styles.row}>
            {data?.map(
               ({
                  _id,
                  thumbnailSrc,
                  thumbnailAlt,
                  audioSrc,
                  title,
                  author,
               }) => (
                  <TrendingPodcastCard
                     key={_id}
                     imgSrc={thumbnailSrc}
                     imgAlt={thumbnailAlt}
                     audioSrc={audioSrc}
                     podName={title}
                     author={author}
                  />
               )
            )}
         </ul>
      </section>
   );
}

export default TrendingPods;
