import React from 'react';
import { CurrentPodcastContext } from '~/routes/home';
import styles from './PodcastRow.module.css';

import {
   HeadphonesIcon,
   ClockIcon,
   MenuDotsIcon,
} from '../../libs/icons';
import Card from '../Card/Card';

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
      <li
         className={styles.row}
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
         <button className={styles.item}>
            <div className={styles.ranking}>1</div>

            <div className={styles.pod}>
               <Card
                  className={styles.podTitle}
                  imgClassName={styles.thumbnail}
                  imgSrc={thumbnailSrc}
                  imgAlt={thumbnailAlt}
               >
                  <>
                     <p className={styles.podName}>{title}</p>
                     <p>{author}</p>
                  </>
               </Card>

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
            </div>
         </button>
      </li>
   );
}
