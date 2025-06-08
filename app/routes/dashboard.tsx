import React from 'react';
import type { Route } from './+types/dashboard';
import Navbar from '~/components/Navbar/Navbar';
import Home from './home';

export function meta({}: Route.MetaArgs) {
   return [
      { title: 'Dashboard' },
      { name: 'description', content: 'Welcome to PodDev !' },
   ];
}

export default function Dashboard() {
   return (
      <>
         <Navbar></Navbar>
         <Home></Home>
      </>
   );
}
