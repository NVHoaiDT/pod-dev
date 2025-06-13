import React from 'react';

import styles from './LatestPods.module.css';
import LinkButton from '../LinkButton/LinkButton';
import PodCastRow from '../PodcastRow/PodcastRow';

const podcastData = [
   {
      thumbnailSrc:
         'https://images.unsplash.com/photo-1657121576415-df1780784ecb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Daily Boost',
      author: 'Motivation Nation',
      totalPlay: 1234,
      lenght: 30,
   },
   {
      thumbnailSrc:
         'https://images.unsplash.com/photo-1724762866054-bf8e2919924f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Tech Podcast',
      author: 'Tech Talk',
      totalPlay: 5678,
      lenght: 45,
   },
   {
      thumbnailSrc:
         'https://images.unsplash.com/photo-1746427397762-0c56f73e8b58?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Music Mix',
      author: 'DJ Mixmaster',
      totalPlay: 2222,
      lenght: 90,
   },
   {
      thumbnailSrc:
         'https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Comedy Hour',
      author: 'Laugh Out Loud',
      totalPlay: 9012,
      lenght: 60,
   },
];

export default function LatestPods() {
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
            {podcastData.map(
               ({
                  thumbnailSrc,
                  title,
                  author,
                  totalPlay,
                  lenght,
               }) => (
                  <PodCastRow
                     key={title}
                     thumbnailSrc={thumbnailSrc}
                     title={title}
                     author={author}
                     totalPlay={totalPlay}
                     lenght={lenght}
                  />
               )
            )}
         </ul>
      </section>
   );
}
