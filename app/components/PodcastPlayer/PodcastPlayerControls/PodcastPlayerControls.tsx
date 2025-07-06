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
   //for demo
   const audioSrc =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
   const audioRef = React.useRef<HTMLAudioElement>(
      new Audio(audioSrc)
   );

   // play/pause audio
   React.useEffect(() => {
      if (isPlaying) {
         audioRef.current.play();
      } else {
         audioRef.current.pause();
      }
   }, [isPlaying]);

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
