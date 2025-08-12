import * as React from 'react';

import styles from './Progress.module.css';
import { Progress as PrimidiveProgess } from 'radix-ui';

function Progress() {
   const [progress, setProgress] = React.useState(13);

   React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
   }, []);

   return (
      <PrimidiveProgess.Root className={styles.Root} value={progress}>
         <PrimidiveProgess.Indicator
            className={styles.Indicator}
            style={{ transform: `translateX(-${100 - progress}%)` }}
         />
      </PrimidiveProgess.Root>
   );
}

export default Progress;
