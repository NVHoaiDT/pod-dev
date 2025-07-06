import * as React from 'react';

import styles from './PodcastPlayer.module.css';
import PodcastPlayerControls from './PodcastPlayerControls';
import {
   PauseIcon,
   PlayIcon,
   ShuffleIcon,
   PlayNextFillIcon,
   PlayBackIcon,
   Volume2Icon,
} from '../../libs/icons';
import useToggle from '~/hooks/useToggle';

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
   const [isPlaying, togglePlayPause] = useToggle(false);
   function handleNext() {}
   function handlePrevious() {}

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

         <PodcastPlayerControls
            isPlaying={isPlaying}
            handlePlayPause={togglePlayPause}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
         ></PodcastPlayerControls>

         <div className={styles.progress}>
            <p>{'1:45/4:42'}</p>
            <Volume2Icon />
         </div>
      </div>
   );
}

export default PodcastPlayer;
