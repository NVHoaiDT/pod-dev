import * as React from 'react';

import styles from './PopularPods.module.css';
import PodCard from '../PodCard';

const podsData = [
   {
      imgSrc:
         'https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imgAlt: 'The Comedy Hour',
      podName: 'The Comedy Hour',
      author: 'John Doe',
   },
   {
      imgSrc:
         'https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imgAlt: 'The Comedy Hour',
      podName: 'The Comedy Hour',
      author: 'John Doe',
   },
   {
      imgSrc:
         'https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imgAlt: 'The Comedy Hour',
      podName: 'The Comedy Hour',
      author: 'John Doe',
   },
   {
      imgSrc:
         'https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imgAlt: 'The Comedy Hour',
      podName: 'The Comedy Hour',
      author: 'John Doe',
   },
];
function PopularPods() {
   return (
      <div>
         <h2>Popular Podcasts</h2>
         <ul className={styles.row}>
            {podsData.map(({ podName, imgSrc, imgAlt, author }) => (
               <PodCard
                  key={podName}
                  imgSrc={imgSrc}
                  imgAlt={imgAlt}
                  podName={podName}
                  author={author}
               />
            ))}
         </ul>
      </div>
   );
}

export default PopularPods;
