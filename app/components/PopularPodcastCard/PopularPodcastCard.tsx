import * as React from 'react';

import styles from './PopularPodcastCard.module.css';
import Card from '../Card/Card';

interface PopularPodcastCardProps {
   imgSrc: string;
   imgAlt: string;
   podName: string;
   author: string;
   audioSrc: string;
}
function PopularPodcastCard({
   imgSrc,
   imgAlt,
   podName,
   author,
   audioSrc,
}: PopularPodcastCardProps) {
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

export default PopularPodcastCard;
