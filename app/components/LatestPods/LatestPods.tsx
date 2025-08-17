import React from 'react';
import usePodcast from '~/hooks/usePodcast';

import formatSeconds from '~/helpers/format-time';

import styles from './LatestPods.module.css';
import LinkButton from '../LinkButton/LinkButton';
import PodCastRow from '../PodcastRow/PodcastRow';

function LatestPods() {
   const { data, error, isLoading } = usePodcast('latest');

   if (error) return <div>failed to load</div>;
   if (isLoading) return <div>loading...</div>;

   return (
      <section className={styles.section}>
         <header className={styles.header}>
            <h3>Latest Podcasts</h3>
            <div className={styles.actions}>
               <LinkButton className={styles.action}>Sort</LinkButton>
               <LinkButton className={styles.action} href="/">
                  Refresh
               </LinkButton>
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
export default LatestPods;
