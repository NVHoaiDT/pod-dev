import * as React from 'react';
import formatSeconds from '~/helpers/format-time';
import {
   SpeakerSlashDuotone,
   SpeakerHighDuotone,
} from '~/libs/icons';

import styles from './PodcastProgressControls.module.css';
import Slider from '~/components/Slider';

interface PodcastProgressControlsProps {
   currentTime: number;
   duration: number;
   volume: number;
   isMuted: boolean;
   handleIsMuted: () => void;
}

function PodcastProgressControls({
   currentTime,
   duration,
   volume,
   isMuted,
   handleIsMuted,
}: PodcastProgressControlsProps) {
   return (
      <div className={styles.progress}>
         <p className={styles.time}>
            {Math.floor(currentTime)}/
            {formatSeconds(Math.floor(duration))}
         </p>
         <button onClick={handleIsMuted}>
            {isMuted || volume === 0 ? (
               <SpeakerSlashDuotone size={'24px'} />
            ) : (
               <SpeakerHighDuotone size={'24px'} />
            )}
         </button>
         <Slider></Slider>
      </div>
   );
}

export default PodcastProgressControls;
