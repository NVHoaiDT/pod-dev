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
   'https://res.cloudinary.com/djwpst00v/video/upload/v1751867058/BBC-Noodles_yf7tn0.mp3';

// !!!!!!!!!!!!!!!!! A LOT OF STUFF NEED TO MEMO !!!!!!!!!!!!!!!!!
function PodcastPlayer() {
   const audioRef = React.useRef<undefined | HTMLAudioElement>(
      undefined
   );

   const [isPlaying, togglePlayPause] = useToggle(false);
   const [currentTime, setCurrentTime] = React.useState(0);
   const [duration, setDuration] = React.useState(0);

   const [volume, setVolume] = React.useState(1);
   const [isMuted, toggleIsMuted] = useToggle(false);

   //initial audio setup
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

   //play/pause
   React.useEffect(() => {
      if (isPlaying) {
         audioRef.current?.play();
      } else {
         audioRef.current?.pause();
      }
   }, [isPlaying]);

   // forward, backward
   function handleNext() {
      if (audioRef.current) {
         audioRef.current.currentTime += 15;
      }
   }
   function handlePrevious() {
      if (audioRef.current) {
         audioRef.current.currentTime -= 15;
      }
   }

   //muted/unmuted
   React.useEffect(() => {
      if (audioRef.current) {
         audioRef.current.muted = isMuted;
      }
   }, [isMuted]);

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
            duration={duration}
            currentTime={currentTime}
            volume={volume}
            isMuted={isMuted}
            handleIsMuted={toggleIsMuted}
         ></PodcastPlayerControls>
      </div>
   );
}

export default PodcastPlayer;
