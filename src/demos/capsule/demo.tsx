import React from 'react';
import { Capsule } from 'union-design-h5';

const Demo = () => (
  <div>
    <Capsule
      onOption={() => {
        console.log('onOption');
      }}
      onClose={() => {
        console.log('onClose');
      }}
    />
  </div>
);

export default Demo;
