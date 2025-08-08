import * as React from 'react';

import usePodcast from '~/hooks/usePodcast';
import styles from './PopularPods.module.css';
import PopularPodcastCard from '../PopularPodcastCard';

function PopularPods() {
   const { data, error, isLoading } = usePodcast('popular');
   if (error) return <div>failed to load</div>;
   if (isLoading) return <div>loading...</div>;

   return (
      <section>
         <h3>Popular Podcasts</h3>
         <ul className={styles.row}>
            {data?.map(
               ({
                  _id,
                  title,
                  thumbnailAlt,
                  thumbnailSrc,
                  audioSrc,
               }) => (
                  <PopularPodcastCard
                     key={_id}
                     podName={title}
                     imgSrc={thumbnailSrc}
                     imgAlt={thumbnailAlt}
                     author={'TEMP'}
                     audioSrc={audioSrc}
                  />
               )
            )}
         </ul>
      </section>
   );
}

export default PopularPods;
