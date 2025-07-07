import * as React from 'react';

import styles from './PodcastPlayer.module.css';
import PodcastPlayerControls from './PodcastPlayerControls';
import { Volume2Icon } from '../../libs/icons';
import useToggle from '~/hooks/useToggle';

type PodcasterPlayerProps = {
   _id: string;
   title: string;
   thumbnailSrc: string;
   thumbnailAlt: string;
   totalListened: number;
   author: string;
};

//for demo
const audioSrc =
   'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
function PodcastPlayer() {
   const audioRef = React.useRef<undefined | HTMLAudioElement>(
      undefined
   );

   const [isPlaying, togglePlayPause] = useToggle(false);
   const [currentTime, setCurrentTime] = React.useState(0);
   const [duration, setDuration] = React.useState(0);

   //diliver from state

   React.useEffect(() => {
      audioRef.current = new Audio(audioSrc);
      const handleTimeUpdate = () => {
         setCurrentTime(audioRef.current?.currentTime || 0);
      };

      const handleMetadataLoaded = () => {
         setDuration(audioRef.current?.duration || 0);
      };
      audioRef.current.addEventListener(
         'timeupdate',
         handleTimeUpdate
      );

      audioRef.current.addEventListener(
         'loadedmetadata',
         handleMetadataLoaded
      );
      return () => {
         audioRef.current?.removeEventListener(
            'timeupdate',
            handleTimeUpdate
         );

         audioRef.current?.removeEventListener(
            'loadedmetadata',
            handleMetadataLoaded
         );
      };
   }, []);

   React.useEffect(() => {
      if (isPlaying) {
         audioRef.current?.play();
      } else {
         audioRef.current?.pause();
      }
   }, [isPlaying]);

   // forward, backward
   React.useEffect(() => {});
   function handleNext() {}
   function handlePrevious() {}

   return (
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
            <p>
               {Math.floor(currentTime)}/{duration}
            </p>
            <Volume2Icon />
         </div>
      </div>
   );
}

export default PodcastPlayer;
