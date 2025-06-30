import React from 'react';

import styles from './PodcastRow.module.css';

import {
   HeadphonesIcon,
   ClockIcon,
   MenuDotsIcon,
} from '../../libs/icons';
interface PodCastRowProps {
   thumbnailSrc: string;
   thumbnailAlt: string;
   title: string;
   author: string;
   totalListened: number;
   lenght: number;
}

export default function PodCastRow({
   thumbnailSrc,
   thumbnailAlt,
   title,
   author,
   totalListened,
   lenght,
}: PodCastRowProps) {
   return (
      <li className={styles.row}>
         {/* yes we have some stuff here */}
         <div className={styles.pod}>
            <div>01</div>
            <figure className={styles.figure}>
               <img
                  src={thumbnailSrc}
                  alt={thumbnailAlt}
                  className={styles.thumbnail}
               />
               <div>
                  <h5>{title}</h5>
                  <p>{author}</p>
               </div>
            </figure>
         </div>
         <div className={styles.stats}>
            <div className={styles.stat}>
               <HeadphonesIcon></HeadphonesIcon>
               <span>{totalListened}</span>
            </div>
            <div className={styles.stat}>
               <ClockIcon></ClockIcon>
               <span>{lenght}</span>
            </div>
            <MenuDotsIcon></MenuDotsIcon>
         </div>
      </li>
   );
}
