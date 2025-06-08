import React from 'react';
import styles from './Card.module.css';
import type { r } from 'node_modules/@react-router/dev/dist/routes-DHIOx0R9';

interface CardProps {
   type: string;
   thumbnailSrc: string;
   title: string;
   author: string;
}
export default function Card({
   type,
   thumbnailSrc,
   title,
   author,
}: CardProps) {
   return (
      <div className={styles.card}>
         <figure className={styles.figure}>
            <img src={thumbnailSrc} alt={title} />
            <div>
               <p>{title}</p>
               <p>{author}</p>
            </div>
         </figure>
      </div>
   );
}
