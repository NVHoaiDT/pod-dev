import React from 'react';
import styles from './Card.module.css';
import type { r } from 'node_modules/@react-router/dev/dist/routes-DHIOx0R9';
import type { title } from 'process';

interface CardProps {
   className: string;
   imgSrc: string;
   imgAlt: string;
   children: React.ReactNode;
}
export default function Card({
   className,
   imgSrc,
   imgAlt,
   children,
}: CardProps) {
   return (
      <figure className={styles.card}>
         <img src={imgSrc} alt={imgAlt} className={className} />
         <div>{children}</div>
      </figure>
   );
}
