import * as React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import SuggestedCard from '../SuggestedCard';

function SuggestedPods() {
   return (
      <div>
         <header>
            <h4>Fan also like</h4>
            <LinkButton>See all</LinkButton>
         </header>
         <SuggestedCard></SuggestedCard>
      </div>
   );
}

export default SuggestedPods;
