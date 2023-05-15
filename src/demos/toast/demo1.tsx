import React from 'react';
import { Toast, Icon, Loading } from 'union-design-h5';

const style = {
  height: 44,
  width: '100%',
  cursor: 'pointer',
  alignItems: 'center',
  alignContent: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight: 12,
  borderBottom: '1px solid #EEF0F0',
};

// start toast一些自定义 // end
const ToastDemo = () => (
  <div>
    <p style={{ margin: '28px 0px 16px 16px' }}>自定义</p>
    <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
      <div
        style={{ ...style }}
        onClick={() => Toast.info({
          icon: <div style={{ background: '#c20000', width: 16, height: 16 }} />,
          content: '自定义icon图标展示',
        })}
      >
        <div>自定义提示框Icon</div>
        <Icon type="right" />
      </div>
      <div
        style={{ ...style }}
        onClick={() => Toast.hide()}
      >
        <div>关闭提示框</div>
        <Icon type="right" />
      </div>
    </div>
  </div>
);

export default ToastDemo;
