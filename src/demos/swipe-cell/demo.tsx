import React from 'react';
import { SwipeCell, Icon } from 'union-design-h5';

const cellStyle = {
  paddingTop: 16,
  textAlign: 'center',
  color: '#fff',
  width: 80,
};

const content = (
  <div style={{
    height: 80, backgroundColor: '#fff', display: 'flex', alignItems: 'center', paddingLeft: 32,
  }}
  >
    <div>可滑动单元格</div>
  </div>
);

const swipeContent = [
  {
    content: (
      <div style={{ color: '#fff' }}>
        <div>
          <Icon type="telephone" style={{ fontSize: 24 }} />
          <div>电话</div>
        </div>
      </div>),
    style: { ...cellStyle, background: '#F31D39' },
  },
  {
    content: (
      <div style={{ color: '#fff' }}>
        <div>
          <Icon type="message" style={{ fontSize: 24 }} />
          <div>短信</div>
        </div>
      </div>),
    style: { ...cellStyle, background: '#FE461C' },
  },
  {
    content: (
      <div style={{ color: '#fff' }}>
        <div>
          <Icon type="mail-line" style={{ fontSize: 24 }} />
          <div>邮件</div>
        </div>
      </div>),
    style: { ...cellStyle, background: '#FA7E2A' },
  },
];

const Demo = () => (
  <div
    style={{
      width: '100%',
      height: 600,
    }}
  >
    <p style={{ margin: '28px 0px 16px 16px' }}>只有右边可滑动</p>
    <SwipeCell
      right={swipeContent}
    >
      {content}
    </SwipeCell>
    <p style={{ margin: '28px 0px 16px 16px' }}>只有左边可滑动</p>
    <SwipeCell
      onOpen={() => console.log('open')}
      onClose={() => console.log('close')}
      left={swipeContent}
    >
      {content}
    </SwipeCell>
    <p style={{ margin: '28px 0px 16px 16px' }}>左右两边可滑动</p>
    <SwipeCell
      left={swipeContent}
      right={swipeContent}
    >
      {content}
    </SwipeCell>
  </div>
);

export default Demo;
