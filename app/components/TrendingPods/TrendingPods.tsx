import * as React from 'react';

import usePodcast from '~/hooks/usePodcast';
import styles from './TrendingPods.module.css';
import PodcastCard from '../PodcastCard';

function TrendingPods() {
   const { data, error, isLoading } = usePodcast('trending');

   if (error) return <div>failed to load</div>;
   if (isLoading) return <div>loading...</div>;

   return (
      <section>
         <h2>Trending Podcasts</h2>
         <ul className={styles.row}>
            {data?.map(({ _id, imgSrc, imgAlt, podName, author }) => (
               <PodcastCard
                  key={_id}
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
