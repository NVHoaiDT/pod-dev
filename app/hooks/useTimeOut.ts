import { s } from 'node_modules/react-router/dist/development/lib-C1JSsICm.mjs';
import React from 'react';

export default function useTimeOut(callback: () => void, delay: number) {
   const timeoutRef = React.useRef<number | null>(null);
   const savedCallback = React.useRef(callback);

   React.useEffect(() => {
      savedCallback.current = callback;
   }, [callback]);

   React.useEffect(() => {
      const tick = () => savedCallback.current();
      if (typeof delay === 'number') {
         timeoutRef.current = window.setTimeout(tick, delay);

         return () => window.clearTimeout(timeoutRef.current!);
      }
   }, [delay]);

   return timeoutRef;
}
