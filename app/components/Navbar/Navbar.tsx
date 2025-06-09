import React from 'react';

import Logo from '../Logo/Logo';
import NavItem from '../NavItem/NavItem';
import {
   HomeIcon,
   DiscoverIcon,
   PodcastIcon,
   ProfileIcon,
} from '../../libs/icons';

// use useContext latter.
const navItemsData = [
   { id: 'home', to: '/', icon: <HomeIcon />, text: 'Home' },
   {
      id: 'discover',
      to: '/discover',
      icon: <DiscoverIcon />,
      text: 'Discover',
   },
   {
      id: 'podcast',
      to: '/create',
      icon: <PodcastIcon />,
      text: 'Create Podcast',
   },
   {
      id: 'profile',
      to: '/profile',
      icon: <ProfileIcon />,
      text: 'My Profile',
   },
];
export default function Navbar() {
   return (
      <nav>
         <Logo></Logo>
         <ul>
            {navItemsData.map(({ id, to, icon, text }) => (
               <NavItem key={id} to={to} icon={icon} text={text} />
            ))}
         </ul>
      </nav>
   );
}
