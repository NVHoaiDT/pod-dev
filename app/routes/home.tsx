import React from 'react';
import Home from '~/components/Home';

interface Podcast {
   title: string;
   author: string;
   thumbnailURL: string;
   thumbnailAlt: string;
   audioSrc: string;
}

type CurrentPodcastContextType = {
   currentPodcast: Podcast;
   handleChangePodcast: (
      title: string,
      author: string,
      thumbnailURL: string,
      thumbnailAlt: string,
      audioSrc: string
   ) => void;
};

const initialPodcast: Podcast = {
   title: '',
   author: '',
   thumbnailURL: '',
   thumbnailAlt: '',
   audioSrc: '',
};

export const CurrentPodcastContext =
   React.createContext<CurrentPodcastContextType>({
      currentPodcast: initialPodcast,
      handleChangePodcast: () => {},
   });

export default function HomePage() {
   const [currentPodcast, setCurrentPodcast] =
      React.useState(initialPodcast);

   function handleChangePodcast(
      title: string,
      author: string,
      thumbnailURL: string,
      thumbnailAlt: string,
      audioSrc: string
   ) {
      setCurrentPodcast({
         title,
         author,
         thumbnailURL,
         thumbnailAlt,
         audioSrc,
      });
   }
   const contextValue = {
      currentPodcast,
      handleChangePodcast,
   };

   return (
      <CurrentPodcastContext.Provider value={contextValue}>
         <Home></Home>;
      </CurrentPodcastContext.Provider>
   );
}
