import * as React from 'react';
import { Outlet } from 'react-router';

import styles from './layout.module.css';
import Navbar from '~/components/Navbar/Navbar';

export default function Layout({}) {
   return (
      <div className={styles.grid}>
         <Navbar />
         <Outlet />
      </div>
   );
}
