import * as React from 'react';
import { Slider as PrimitiveSlider } from 'radix-ui';

import styles from './Slider.module.css';

interface SliderProps {
   className?: string;
   defaultValue?: number;
   max?: number;
   step?: number;
}

function Slider({ className, defaultValue, max, step }: SliderProps) {
   return (
      <form>
         <PrimitiveSlider.Root
            className={styles.root}
            defaultValue={[50]}
            max={100}
            step={1}
         >
            <PrimitiveSlider.Track className={styles.track}>
               <PrimitiveSlider.Range className={styles.range} />
            </PrimitiveSlider.Track>
         </PrimitiveSlider.Root>
      </form>
   );
}

export default Slider;
