import * as React from 'react';

import { CurrentPodcastContext } from '~/routes/home';

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
   const { handleChangePodcast } = React.useContext(
      CurrentPodcastContext
   );
   return (
      <li className={styles.listItem}>
         <button
            className={styles.button}
            onClick={() => {
               handleChangePodcast(
                  podName,
                  author,
                  imgSrc,
                  imgAlt,
                  audioSrc
               );
            }}
         >
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
         </button>
      </li>
   );
}

export default PopularPodcastCard;
