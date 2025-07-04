import * as React from 'react';

import styles from './Home.module.css';
import TrendingPods from '../TrendingPods';
import PopularPods from '../PopularPods';
import PodcastPlayer from '../PodcastPlayer';
import SuggestedPods from '../SuggestedPods';
import TopPodcasters from '../TopPodcasters';
import LatestPods from '../LatestPods/LatestPods';

function Home() {
   return (
      <div className={styles.home}>
         <main className={styles.main}>
            <TrendingPods></TrendingPods>
            <LatestPods></LatestPods>
            <PopularPods></PopularPods>
         </main>
         <aside className={styles.aside}>
            <SuggestedPods></SuggestedPods>
            <TopPodcasters></TopPodcasters>
         </aside>
         <PodcastPlayer />
      </div>
   );
}
export default Home;
