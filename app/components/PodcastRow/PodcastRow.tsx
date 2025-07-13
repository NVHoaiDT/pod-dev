import React from 'react';
import { CurrentPodcastContext } from '~/routes/home';
import styles from './PodcastRow.module.css';

import {
   HeadphonesIcon,
   ClockIcon,
   MenuDotsIcon,
} from '../../libs/icons';
interface PodCastRowProps {
   thumbnailSrc: string;
   thumbnailAlt: string;
   audioSrc: string;
   title: string;
   author: string;
   totalListened: number;
   lenght: string;
}

export default function PodCastRow({
   thumbnailSrc,
   thumbnailAlt,
   audioSrc,
   title,
   author,
   totalListened,
   lenght,
}: PodCastRowProps) {
   const { handleChangePodcast } = React.useContext(
      CurrentPodcastContext
   );
   return (
      <button
         onClick={() => {
            handleChangePodcast(
               title,
               author,
               thumbnailSrc,
               thumbnailAlt,
               audioSrc
            );
         }}
      >
         <li className={styles.row}>
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
                  <HeadphonesIcon color={'#fff'} />
                  <span>{totalListened}</span>
               </div>
               <div className={styles.stat}>
                  <ClockIcon></ClockIcon>
                  <span>{lenght}</span>
               </div>
               <MenuDotsIcon></MenuDotsIcon>
            </div>
         </li>
      </button>
   );
}
