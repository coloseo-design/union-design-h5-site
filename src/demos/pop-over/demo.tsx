import React from 'react';
import { PopOver, Button } from 'union-design-h5';

const content = (
  <div style={{ backgroundColor: '#fff', width: 60 }}>
    <div style={{ height: 44, padding: '8px 0px' }}>选择标题</div>
    <div
      style={{
        height: 42, padding: '8px 0px', borderTop: '1px solid #EEF0F0', borderBottom: '1px solid #EEF0F0',
      }}
    >
      选择标题
    </div>
    <div style={{ height: 44, padding: '8px 0px' }}>选择标题</div>
  </div>
);

const popoverDemo = () => (
  <div>
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>弹窗在下方弹出</p>
      <PopOver content={content} placement="bottomLeft">
        <Button style={{ marginLeft: 16 }} type="ghost">bottomLeft</Button>
      </PopOver>
      <PopOver content={content} placement="bottom">
        <Button type="ghost" style={{ margin: '0px 16px' }}>bottom</Button>
      </PopOver>
      <PopOver content={content} placement="bottomRight">
        <Button type="ghost" style={{ marginTop: 16 }}>bottomRight</Button>
      </PopOver>
    </div>
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>弹窗在上方弹出</p>
      <PopOver content={content} placement="topLeft">
        <Button style={{ marginLeft: 16 }} type="ghost">topLeft</Button>
      </PopOver>
      <PopOver content={content} placement="top">
        <Button type="ghost" style={{ margin: '0px 16px' }}>top</Button>
      </PopOver>
      <PopOver content={content} placement="topRight">
        <Button type="ghost">topRight</Button>
      </PopOver>
    </div>

  </div>
);

export default popoverDemo;
