import * as React from 'react';

import formatSeconds from '~/helpers/format-time';

import styles from './PodcastPlayerControls.module.css';
import {
   PlayLineDuotone,
   PauseLineDuotone,
   ShuffleLineDuotone,
   RepeatLineDuotone,
   PlayerNextDuotone,
   PlayerPreviousDuotone,
} from '../../../libs/icons';

interface PodcastPlayerProps {
   handlePlayPause: () => void;
   handleNext: () => void;
   handlePrevious: () => void;
   isPlaying: boolean;
}

function PodcastPlayerControls({
   isPlaying,
   handlePlayPause,
   handleNext,
   handlePrevious,
}: PodcastPlayerProps) {
   return (
      <>
         <div className={styles.controls}>
            <button className={styles.shuffleButton}>
               <ShuffleLineDuotone size={'24px'} />
            </button>
            <button
               className={styles.previousButton}
               onClick={handlePrevious}
            >
               <PlayerPreviousDuotone size={'24px'} />
               <span>-15</span>
            </button>
            {isPlaying ? (
               <button
                  className={styles.pauseButton}
                  onClick={handlePlayPause}
               >
                  <PauseLineDuotone size={'24px'} />
               </button>
            ) : (
               <button
                  className={styles.playButton}
                  onClick={handlePlayPause}
               >
                  <PlayLineDuotone size={'24px'} />
               </button>
            )}
            <button
               className={styles.nextButton}
               onClick={handleNext}
            >
               <span>+15</span>
               <PlayerNextDuotone size={'24px'} />
            </button>
            <button className={styles.repeatButton}>
               <RepeatLineDuotone size={'24px'} />
            </button>
         </div>
      </>
   );
}

export default PodcastPlayerControls;
