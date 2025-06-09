import * as React from 'react';

import styles from './PodCard.module.css';
import Card from '../Card/Card';

interface TrendingPodCardProps {
   imgSrc: string;
   imgAlt: string;
   podName: string;
   author: string;
}
function PodCard({
   imgSrc,
   imgAlt,
   podName,
   author,
}: TrendingPodCardProps) {
   return (
      <li className={styles.listItem}>
         <Card
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            className={styles.trendingPod}
         >
            <>
               <h4>{podName}</h4>
               <p>{author}</p>
            </>
         </Card>
      </li>
   );
}

export default PodCard;
