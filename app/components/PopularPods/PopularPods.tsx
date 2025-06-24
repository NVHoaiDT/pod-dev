import * as React from 'react';

import usePodcast from '~/hooks/usePodcast';
import styles from './PopularPods.module.css';
import PodCard from '../PodcastCard';

function PopularPods() {
   const { data, error, isLoading } = usePodcast('popular');
   if (error) return <div>failed to load</div>;
   if (isLoading) return <div>loading...</div>;

   return (
      <section>
         <h2>Popular Podcasts</h2>
         <ul className={styles.row}>
            {data?.map(({ _id, podName, imgSrc, imgAlt, author }) => (
               <PodCard
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

export default PopularPods;
