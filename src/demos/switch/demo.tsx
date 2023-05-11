import React from 'react';
import { Switch } from 'union-design-h5';

const switchDemo = () => (
  <div style={{ backgroundColor: '#fff', padding: 16 }}>
    <p style={{ margin: '12px 0px 16px 0px' }}>默认不选中</p>
    <Switch checked={false} />
    <p style={{ margin: '28px 0px 16px 0px' }}>选中状态 自定义颜色为红色</p>
    <Switch checked color="red" />
    <p style={{ margin: '28px 0px 16px 0px' }}>选中状态 自定义颜色为绿色</p>
    <Switch checked color="green" />
    <p style={{ margin: '28px 0px 16px 0px' }}>默认样式</p>
    <Switch />
  </div>
);

export default switchDemo;
