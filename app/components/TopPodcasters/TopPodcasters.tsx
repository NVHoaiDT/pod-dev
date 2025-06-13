import * as React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import PodcasterCard from '../PodcasterCard';

const topPodcasterData = [
   {
      imgSrc:
         'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Alexander Hipp',
      nickName: '@alexhipp',
      totalPodcast: 12,
   },
   {
      imgSrc:
         'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Seth Doyle',
      nickName: '@sethdoyle',
      totalPodcast: 22,
   },
   {
      imgSrc:
         'https://plus.unsplash.com/premium_photo-1723485816943-32bd3fa0cf03?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Curated Lifestyle',
      nickName: '@curatedlifestyle',
      totalPodcast: 30,
   },
   {
      imgSrc:
         'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Christopher Campbell',
      nickName: '@chris_campbell',
      totalPodcast: 12,
   },
];
function TopPodcasters() {
   return (
      <div className="topPodcasters">
         <header>
            <h4>Top Podcasters</h4>
            <LinkButton href="/podcasters">See All</LinkButton>
         </header>
         {topPodcasterData.map((podcaster) => (
            <PodcasterCard
               key={podcaster.name}
               imgSrc={podcaster.imgSrc}
               name={podcaster.name}
               nickName={podcaster.nickName}
               totalPodcast={podcaster.totalPodcast}
            />
         ))}
      </div>
   );
}

export default TopPodcasters;
