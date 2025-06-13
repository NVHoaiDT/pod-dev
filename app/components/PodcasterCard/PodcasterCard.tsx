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
      <Card
         key={nickName}
         className={styles.podcasterCard}
         imgClassName={styles.img}
         imgSrc={imgSrc}
         imgAlt={nickName}
      >
         <div className={styles.info}>
            <div>
               <p>{name}</p>
               <p>{nickName}</p>
            </div>
            <p>{totalPodcast} Podcasts</p>
         </div>
      </Card>
   );
}

export default PodcasterCard;
