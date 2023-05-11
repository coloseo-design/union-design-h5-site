import React from 'react';
import { Loading } from 'union-design-h5';

const LoadingDemo = () => (
  <>
    <p style={{ margin: '28px 0px 16px 16px' }}>加载类型</p>
    <div style={{ backgroundColor: '#fff', padding: 16 }}>
      <Loading style={{ marginBottom: 16 }} />
      <Loading type="spinner" />
    </div>
    <p style={{ margin: '28px 0px 16px 16px' }}>自定义大小、加载文案</p>
    <div style={{ backgroundColor: '#fff', padding: 16 }}>
      <Loading style={{ marginBottom: 16 }}>加载中, 请等候....</Loading>
      <Loading size={40} textSize={20}>加载中....</Loading>
    </div>
    <p style={{ margin: '28px 0px 16px 16px' }}>垂直排列</p>
    <div style={{ backgroundColor: '#fff', padding: 16 }}>
      <Loading type="spinner" vertical>加载中...</Loading>
    </div>

  </>
);

export default LoadingDemo;
