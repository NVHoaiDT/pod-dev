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
            {data?.map(
               ({ _id, title, thumbnailAlt, thumbnailSrc }) => (
                  <PodCard
                     key={_id}
                     podName={title}
                     imgSrc={thumbnailSrc}
                     imgAlt={thumbnailAlt}
                     // this one should be handled latter
                     author={'TEMP'}
                  />
               )
            )}
         </ul>
      </section>
   );
}

export default PopularPods;
