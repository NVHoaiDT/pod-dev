import * as React from 'react';

import styles from './TrendingPodcastCard.module.css';
import Card from '../Card/Card';

interface TrendingPodcastCardProps {
   imgSrc: string;
   imgAlt: string;
   podName: string;
   author: string;
   audioSrc: string;
}
function TrendingPodcastCard({
   imgSrc,
   imgAlt,
   podName,
   author,
   audioSrc,
}: TrendingPodcastCardProps) {
   return (
      <li className={styles.listItem}>
         <Card
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            className={styles.popularPodcastCard}
            imgClassName={styles.podCardThumbnail}
         >
            <>
               <h5 className={styles.title}>{podName}</h5>
               <p className={styles.author}>{author}</p>
            </>
         </Card>
      </li>
   );
}

export default TrendingPodcastCard;
