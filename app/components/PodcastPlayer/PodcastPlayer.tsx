import * as React from 'react';

import useToggle from '~/hooks/useToggle';
import styles from './PodcastPlayer.module.css';
import PodcastPlayerControls from './PodcastPlayerControls';

type PodcasterPlayerProps = {
   title: string;
   thumbnailSrc: string;
   thumbnailAlt: string;
   audioSrc: string;
   author: string;
};

// !!!!!!!!!!!!!!!!! A LOT OF STUFF NEED TO BE MEMO !!!!!!!!!!!!!!!!!
function PodcastPlayer({
   title,
   thumbnailSrc,
   thumbnailAlt,
   audioSrc,
   author,
}: PodcasterPlayerProps) {
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
      // cleanup previous Audio instance - better to handle in cleanup function
      if (audioRef.current) {
         audioRef.current.pause();
         audioRef.current = undefined;
      }

      audioRef.current = new Audio(audioSrc);

      const handleTimeUpdate = () => {
         setCurrentTime(audioRef.current?.currentTime || 0);
      };

      const handleMetadataLoaded = () => {
         setDuration(audioRef.current?.duration || 0);
      };
      //track current time
      audioRef.current.addEventListener(
         'timeupdate',
         handleTimeUpdate
      );

      //load duration
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
   }, [audioSrc]);

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
            <img
               src={thumbnailSrc}
               alt={thumbnailAlt}
               className={styles.thumbnail}
            />
            <div>
               <h3>{title}</h3>
               <p>{author}</p>
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
