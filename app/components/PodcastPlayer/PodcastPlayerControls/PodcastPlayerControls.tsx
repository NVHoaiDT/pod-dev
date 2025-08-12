import * as React from 'react';

import formatSeconds from '~/helpers/format-time';

import styles from './PodcastPlayerControls.module.css';
import {
   PlayLineDuotone,
   PauseLineDuotone,
   ShuffleLineDuotone,
   RepeatIcon,
   PlayerNextDuotone,
   PlayerPreviousDuotone,
   Volume2Icon,
   MutedSpeakerIcon,
} from '../../../libs/icons';

interface PodcastPlayerProps {
   handlePlayPause: () => void;
   handleNext: () => void;
   handlePrevious: () => void;
   handleIsMuted: () => void;
   isPlaying: boolean;
   isMuted: boolean;
   volume: number;
   currentTime: number;
   duration: number;
}

function PodcastPlayerControls({
   isPlaying,
   handlePlayPause,
   handleNext,
   handlePrevious,
   currentTime,
   duration,
   volume,
   isMuted,
   handleIsMuted,
}: PodcastPlayerProps) {
   return (
      <>
         <div className={styles.controls}>
            <button className={styles.shuffleButton}>
               <ShuffleLineDuotone size={'32px'} />
            </button>
            <button
               className={styles.previousButton}
               onClick={handlePrevious}
            >
               <PlayerPreviousDuotone size={'32px'} />
               {-15}
            </button>
            {isPlaying ? (
               <button
                  className={styles.pauseButton}
                  onClick={handlePlayPause}
               >
                  <PauseLineDuotone size={'32px'} />
               </button>
            ) : (
               <button
                  className={styles.playButton}
                  onClick={handlePlayPause}
               >
                  <PlayLineDuotone size={'32px'} />
               </button>
            )}
            <button
               className={styles.nextButton}
               onClick={handleNext}
            >
               {+15}
               <PlayerNextDuotone size={'32px'} />
            </button>
            <button className={styles.repeatButton}>
               <RepeatIcon />
            </button>
         </div>

         <div className={styles.progress}>
            <p>
               {Math.floor(currentTime)}/
               {formatSeconds(Math.floor(duration))}
            </p>
            <button onClick={handleIsMuted}>
               {isMuted || volume === 0 ? (
                  <MutedSpeakerIcon />
               ) : (
                  <Volume2Icon />
               )}
            </button>
         </div>
      </>
   );
}

export default PodcastPlayerControls;
