import React from 'react';
import { Avatar } from 'union-design-h5';

const AvatarDemo = () => (
  <div style={{ backgroundColor: '#fff', padding: '16px' }}>
    <p style={{ margin: '28px 0px 16px 0px' }}>基本用法</p>
    <Avatar>姓名</Avatar>
    <div>
      <p style={{ margin: '28px 0px 16px 0px' }}>展示不同状态头像</p>
      <Avatar text="姓名" type="success" />
      <Avatar text="姓名" style={{ marginLeft: 24 }} type="error" />
      <Avatar text="姓名" style={{ marginLeft: 24 }} type="info" />
    </div>
    <div>
      <p style={{ margin: '28px 0px 16px 0px' }}>展示不同头像图片</p>
      <Avatar text="测试" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      <Avatar text="测试" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 24 }} />
      <Avatar text="测试" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 24 }} size={48} />
    </div>
    <div>
      <p style={{ margin: '28px 0px 16px 0px' }}>展示不同大小头像</p>
      <Avatar text="姓名" size={32} />
      <Avatar text="姓名" style={{ marginLeft: 24 }} size={48} />
      <Avatar text="姓名" style={{ marginLeft: 24 }} size={64} />
      <Avatar text="姓名" style={{ marginLeft: 24 }} size={96} />
    </div>
  </div>
);

export default AvatarDemo;
