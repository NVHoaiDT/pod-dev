import React from 'react';
import LatestPods from '~/components/LatestPods/LatestPods';
import PodcastPlayer from '~/components/PodcastPlayer';
import PopularPods from '~/components/PopularPods';
import TrendingPods from '~/components/TrendingPods';

export default function Home() {
   return (
      <div>
         <TrendingPods></TrendingPods>
         <LatestPods></LatestPods>
         <PopularPods></PopularPods>
         <PodcastPlayer></PodcastPlayer>
      </div>
   );
}
