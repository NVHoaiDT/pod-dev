import * as React from 'react';

import Card from '../Card/Card';
import styles from './PodcasterCard.module.css';

interface PodcasterCardProps {
   imgSrc: string;
   name: string;
   nickName: string;
   totalPodcast: number;
}
function PodcasterCard({
   imgSrc,
   name,
   nickName,
   totalPodcast,
}: PodcasterCardProps) {
   return (
      <li className={styles.item}>
         <Card
            key={nickName}
            className={styles.podcasterCard}
            imgClassName={styles.img}
            imgSrc={imgSrc}
            imgAlt={nickName}
         >
            <div className={styles.podcastersInfo}>
               <div className={styles.info}>
                  <b className={styles.name}>{name}</b>
                  <p className={styles.nickName}>{nickName}</p>
               </div>
               <p className={styles.totalPodcast}>
                  {totalPodcast} Podcasts
               </p>
            </div>
         </Card>
      </li>
   );
}

export default PodcasterCard;
