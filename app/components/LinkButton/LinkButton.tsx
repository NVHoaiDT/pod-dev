import React from 'react';

import styles from './LinkButton.module.css';

interface LinkButtonProps {
   href?: string;
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
}
export default function LinkButton({
   href,
   children,
   className,
   style,
   ...rest
}: LinkButtonProps) {
   const Tag = typeof href === 'string' ? 'a' : 'button';
   return (
      <Tag
         href={href}
         className={`${styles.linkButton} ${className}`}
         style={style}
         {...rest}
      >
         {children}
      </Tag>
   );
}
