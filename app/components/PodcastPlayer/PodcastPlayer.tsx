import * as React from 'react';

import styles from './PodcastPlayer.module.css';
import {
   PauseIcon,
   PlayIcon,
   ShuffleIcon,
   PlayNextFillIcon,
   PlayBackIcon,
   Volume2Icon,
} from '../../libs/icons';

/* 
   output: a podcast player with play/pause toggle, forward/backward buttons, and volume control   
*/

type PodcasterPlayerProps = {
   _id: string;
   title: string;
   thumbnailSrc: string;
   thumbnailAlt: string;
   totalListened: number;
   author: string;
};
function PodcastPlayer() {
   return (
      //  the two approachs:
      //       1. create a brand-new individual component for each part of the player
      //       2. embed all the parts of the player into this component

      <div className={styles.podcastPlayer}>
         <div className={styles.info}>
            <img src="" alt="" />
            <div>
               <h3>{'Title'}</h3>
               <p>{'author'}</p>
            </div>
         </div>

         <div className={styles.controls}>
            <ShuffleIcon color="#fffff" />
            <PlayBackIcon />
            <PauseIcon />
            <PlayNextFillIcon />
         </div>

         <div className={styles.progress}>
            <p>{'1:45/4:42'}</p>
            <Volume2Icon />
         </div>
      </div>
   );
}

export default PodcastPlayer;
