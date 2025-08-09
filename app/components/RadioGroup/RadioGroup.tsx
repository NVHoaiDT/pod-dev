import * as React from 'react';
import { RadioGroup as PrimitiveRadioGroup } from 'radix-ui';

import styles from './RadioGroup.module.css';
function RadioGroup() {
   return (
      <form>
         <PrimitiveRadioGroup.Root
            className={styles.Root}
            defaultValue="default"
            aria-label="View density"
         >
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <PrimitiveRadioGroup.Item
                  className={styles.Item}
                  value="default"
                  id="r1"
               >
                  <PrimitiveRadioGroup.Indicator
                     className={styles.Indicator}
                  />
               </PrimitiveRadioGroup.Item>
               <label className={styles.Label} htmlFor="r1">
                  Default
               </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <PrimitiveRadioGroup.Item
                  className={styles.Item}
                  value="comfortable"
                  id="r2"
               >
                  <PrimitiveRadioGroup.Indicator
                     className={styles.Indicator}
                  />
               </PrimitiveRadioGroup.Item>
               <label className={styles.Label} htmlFor="r2">
                  Comfortable
               </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <PrimitiveRadioGroup.Item
                  className={styles.Item}
                  value="compact"
                  id="r3"
               >
                  <PrimitiveRadioGroup.Indicator
                     className={styles.Indicator}
                  />
               </PrimitiveRadioGroup.Item>
               <label className={styles.Label} htmlFor="r3">
                  Compact
               </label>
            </div>
         </PrimitiveRadioGroup.Root>
      </form>
   );
}

export default RadioGroup;
