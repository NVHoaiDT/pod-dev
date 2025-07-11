import * as React from 'react';

import styles from './PodcastCard.module.css';
import Card from '../Card/Card';

interface PodcastCardProps {
   imgSrc: string;
   imgAlt: string;
   podName: string;
   author: string;
   audioSrc: string;
}
function PodcastCard({
   imgSrc,
   imgAlt,
   podName,
   author,
   audioSrc,
}: PodcastCardProps) {
   return (
      <li className={styles.listItem}>
         <Card
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            className={styles.trendingPod}
            imgClassName={styles.podCardImg}
         >
            <>
               <h4>{podName}</h4>
               <p>{author}</p>
            </>
         </Card>
      </li>
   );
}

export default PodcastCard;
