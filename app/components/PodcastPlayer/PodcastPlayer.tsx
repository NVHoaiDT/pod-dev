import * as React from 'react';

import useToggle from '~/hooks/useToggle';
import Slider from '../Slider';
import styles from './PodcastPlayer.module.css';
import PodcastPlayerControls from './PodcastPlayerControls';
import Card from '../Card/Card';
import PodcastProgressControls from './PodcastProgressControls';

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

   console.log(isPlaying);
   //initial audio setup
   React.useEffect(() => {
      audioRef.current = new Audio(audioSrc);
      // Sync the play/pause state from previous render
      if (isPlaying) {
         audioRef.current?.play();
      }
      // To immediately update the current time wihtout waiting for the audio to load
      setCurrentTime(0);

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

         audioRef.current?.pause();
         audioRef.current?.remove();
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
         {/* TODO : ADD THE PROGRESS BAR HERE */}

         <Card
            className={styles.podcastPlayerCard}
            imgSrc={thumbnailSrc}
            imgAlt={thumbnailAlt}
            imgClassName={styles.thumbnail}
         >
            <div>
               <b>{title}</b>
               <p>{author}</p>
            </div>
         </Card>

         <PodcastPlayerControls
            isPlaying={isPlaying}
            handlePlayPause={togglePlayPause}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
         ></PodcastPlayerControls>

         <PodcastProgressControls
            currentTime={currentTime}
            duration={duration}
            volume={volume}
            isMuted={isMuted}
            handleIsMuted={toggleIsMuted}
         ></PodcastProgressControls>
      </div>
   );
}

export default PodcastPlayer;
