import * as React from 'react';

import Card from '../Card/Card';
import styles from './SuggestedCard.module.css';

const podsData = {
   imgSrc:
      'https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   imgAlt: 'The Comedy Hour',
   podName: 'The Comedy Hour',
   author: 'John Doe',
};

function SuggestedCard() {
   return (
      <Card
         className={styles.suggestedCard}
         imgClassName={styles.suggestedCardThumbnail}
         imgSrc={podsData.imgSrc}
         imgAlt={podsData.imgAlt}
      >
         <div className={styles.info}>
            <p className={styles.podName}>{podsData.podName}</p>
            <p className={styles.author}>{podsData.author}</p>
         </div>
      </Card>
   );
}

export default SuggestedCard;
