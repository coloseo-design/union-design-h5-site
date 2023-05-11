import React from 'react';
import { Button, Icon } from 'union-design-h5';

const style = {
  marginBottom: 16,
};

// start button 文字类和图形类 // end
const ButtonDemo: React.FC<unknown> = () => (
  <div style={{ padding: 16 }}>
    <p>文字类按钮</p>
    <div style={{ marginBottom: 28 }}>
      <p style={{ marginBottom: 16, fontSize: 18, color: '#1C1D1D' }}>文字类</p>
      <p style={{ margin: '16px 0px' }}>12px</p>
      <Button type="link" size="small" style={{ ...style }}>按钮</Button>
      <p style={{ margin: '16px 0px' }}>14px</p>
      <Button type="link" style={{ ...style }}>按钮</Button>
      <p style={{ margin: '16px 0px' }}>16px</p>
      <Button type="link" size="large" style={{ ...style }}>按钮</Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <p style={{ margin: '24px 0px' }}>图形</p>
      <div style={{ padding: 16 }}>
        <Button style={{ ...style, marginRight: 24 }} shape="circle" size="small">
          <Icon type="add" />
        </Button>
        <Button style={{ ...style, marginRight: 24 }} type="light" disabled shape="circle" size="large">
          <Icon type="add" />
        </Button>
        <Button style={{ ...style, marginRight: 24 }} shape="circle">
          <Icon type="add" />
        </Button>
        <Button style={{ ...style, marginRight: 24 }} shape="circle" size="small" disabled>
          <Icon type="add" />
        </Button>
        <Button style={{ ...style, marginRight: 24 }} shape="circle" size="large" disabled>
          <Icon type="add" />
        </Button>
        <Button style={{ ...style, marginRight: 24 }} shape="circle" disabled>
          <Icon type="add" />
        </Button>
      </div>
    </div>
  </div>
);

export default ButtonDemo;
