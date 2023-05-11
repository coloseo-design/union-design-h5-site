import React, { useState } from 'react';
import { Slider } from 'union-design-h5';

const SliderDemo = () => {
  const [value] = useState(0);

  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>基础用法</p>
      <div style={{ padding: 10, width: '100%' }}>
        <Slider value={value} min={0} max={10} />
      </div>
      <p style={{ margin: '28px 0px 16px 16px' }}>指定步长</p>
      <div style={{ padding: 10, width: '100%', marginBottom: 20 }}>
        <Slider value={10} min={0} max={100} />
      </div>
      <div style={{ padding: 10, width: '100%', marginBottom: 20 }}>
        <Slider value={300} min={0} max={1000} />
      </div>
      <div style={{ padding: 10, width: '100%', marginBottom: 20 }}>
        <Slider value={8} min={0} max={10} />
      </div>
    </div>
  );
};

export default SliderDemo;
