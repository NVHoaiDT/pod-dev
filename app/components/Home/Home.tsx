import * as React from 'react';

import TrendingPods from '../TrendingPods';

import PopularPods from '../PopularPods';
import PodcastPlayer from '../PodcastPlayer';
import SuggestedPods from '../SuggestedPods';
import TopPodcasters from '../TopPodcasters';
import styles from './Home.module.css';
import LatestPods from '../LatestPods/LatestPods';
function Home() {
   return (
      <div className={styles.home}>
         <main className={styles.main}>
            <TrendingPods></TrendingPods>
            <LatestPods></LatestPods>
            <PopularPods></PopularPods>
            <PodcastPlayer></PodcastPlayer>
         </main>
         <aside className={styles.aside}>
            <SuggestedPods></SuggestedPods>
            <TopPodcasters></TopPodcasters>
         </aside>
      </div>
   );
}
export default Home;
