import * as React from 'react';

import usePodcaster from '~/hooks/usePodcaster';
import LinkButton from '../LinkButton/LinkButton';
import PodcasterCard from '../PodcasterCard';

function TopPodcasters() {
   const { data, error, isLoading } = usePodcaster('popular');

   if (error) return <div>failed to load</div>;
   if (isLoading) return <div>loading...</div>;

   return (
      <div className="topPodcasters">
         <header>
            <h4>Top Podcasters</h4>
            <LinkButton href="/podcasters">See All</LinkButton>
         </header>
         {data?.map(({ _id, name, avatar, totalPodcasts }) => (
            <PodcasterCard
               key={_id}
               imgSrc={avatar}
               name={name}
               nickName={name}
               totalPodcast={totalPodcasts}
            />
         ))}
      </div>
   );
}

export default TopPodcasters;
