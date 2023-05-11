import React from 'react';
import { Praise } from 'union-design-h5';

const PraiseDemo = () => (
  <>
    <p style={{ margin: '28px 0px 16px 16px' }}>基本样式</p>
    <div style={{ backgroundColor: '#fff', padding: 16 }}><Praise /></div>
    <p style={{ margin: '28px 0px 16px 16px' }}>设置点赞状态</p>
    <div style={{ backgroundColor: '#fff', padding: 16 }}>
      <Praise number={100} status onChange={(number) => { console.log('number', number); }} />
    </div>
  </>
);

export default PraiseDemo;
