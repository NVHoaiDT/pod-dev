import React from 'react';

import styles from './LinkButton.module.css';

interface LinkButtonProps {
   href?: string;
   children: React.ReactNode;
   style?: React.CSSProperties;
}
export default function LinkButton({
   href,
   children,
   style,
   ...rest
}: LinkButtonProps) {
   const Tag = typeof href === 'string' ? 'a' : 'button';
   return (
      <Tag
         href={href}
         className={styles.linkButton}
         style={style}
         {...rest}
      >
         {children}
      </Tag>
   );
}
