import * as React from 'react';

import usePodcaster from '~/hooks/usePodcaster';

import styles from './TopPodcasters.module.css';
import LinkButton from '../LinkButton/LinkButton';
import PodcasterCard from '../PodcasterCard';

function TopPodcasters() {
   const { data, error, isLoading } = usePodcaster('popular');

   if (error) return <div>failed to load</div>;
   if (isLoading) return <div>loading...</div>;

   return (
      <div className={styles.topPodcasters}>
         <header className={styles.header}>
            <h4>Top Podcasters</h4>
            <LinkButton href="/podcasters" className={styles.action}>
               See All
            </LinkButton>
         </header>
         <ul className={styles.list}>
            {data?.map(({ _id, name, avatar, totalPodcasts }) => (
               <PodcasterCard
                  key={_id}
                  imgSrc={avatar}
                  name={name}
                  nickName={name}
                  totalPodcast={totalPodcasts}
               />
            ))}
         </ul>
      </div>
   );
}

export default TopPodcasters;
