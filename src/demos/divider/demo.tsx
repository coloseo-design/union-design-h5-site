import React from 'react';
import { Divider } from 'union-design-h5';

const DividerDemo = () => (
  <div style={{ background: '#fff', padding: '32px 0px' }}>
    <p style={{ margin: '28px 0px 16px 16px' }}>基本用法</p>
    <p style={{ padding: '0px 16px' }}>
      {
      ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`
      }
    </p>
    <Divider />
    <p style={{ margin: '28px 0px 16px 16px' }}>带标题的分割线</p>
    <p style={{ padding: '0px 16px' }}>
      {
      ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`
      }
    </p>
    <Divider>标题</Divider>
  </div>
);

export default DividerDemo;
