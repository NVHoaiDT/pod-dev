import * as React from 'react';

import styles from './PodcastPlayerControls.module.css';
import {
   PlayIcon,
   PauseIcon,
   ShuffleIcon,
   RepeatIcon,
   PlayNextFillIcon,
   PlayBackIcon,
   Volume2Icon,
} from '../../../libs/icons';

interface PodcastPlayerProps {
   isPlaying: boolean;
   handlePlayPause: () => void;
   handleNext: () => void;
   handlePrevious: () => void;
}

function PodcastPlayerControls({
   isPlaying,
   handlePlayPause,
   handleNext,
   handlePrevious,
}: PodcastPlayerProps) {
   return (
      <div className={styles.controls}>
         <button className={styles.shuffleButton}>
            <ShuffleIcon />
         </button>
         <button
            className={styles.previousButton}
            onClick={handlePrevious}
         >
            <PlayBackIcon />
            {-15}
         </button>
         {isPlaying ? (
            <button
               className={styles.pauseButton}
               onClick={handlePlayPause}
            >
               <PauseIcon />
            </button>
         ) : (
            <button
               className={styles.playButton}
               onClick={handlePlayPause}
            >
               <PlayIcon />
            </button>
         )}
         <button className={styles.nextButton} onClick={handleNext}>
            {+15}
            <PlayNextFillIcon />
         </button>
         <button className={styles.repeatButton}>
            <RepeatIcon />
         </button>
      </div>
   );
}

export default PodcastPlayerControls;
