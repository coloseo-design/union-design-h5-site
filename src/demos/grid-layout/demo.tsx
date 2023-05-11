import React from 'react';
import { GridLayout, Icon } from 'union-design-h5';
import './assets/index.less';

const Demo = () => {
  const data = [
    {
      icon: 'add',
      text: '财务系统',
    },
    {
      icon: 'apps',
      text: '人力系统',
    },
    {
      icon: 'award',
      text: '运维',
    },
    {
      icon: 'bell',
      text: '业务',
    },
    {
      icon: 'camera',
      text: 'IT管理',
    },
    {
      icon: 'checkout',
      text: '测试部门',
    },
    {
      icon: 'add',
      text: '研发部门',
    },
    {
      icon: 'apps',
      text: '绩效管理',
    },
  ];
  const renderItem = () => (
    <div style={{ textAlign: 'center', marginBottom: 16 }}>
      <div
        style={{
          height: 48, width: 48, backgroundColor: ' #C8CCCC', borderRadius: 8,
        }}
      />
      <div style={{ fontSize: 12, marginTop: 4 }}>标题</div>
      <div style={{ fontSize: 12 }}>副标题</div>
    </div>
  );

  const renderItem1 = (item: any) => (
    <div
      style={{
        marginBottom: 16, textAlign: 'center',
      }}
    >
      <div
        style={{
          height: 48, width: 48, backgroundColor: ' #C8CCCC', borderRadius: 8,
        }}
      />
      <div
        className="divHidden"
        style={{ width: 48 }}
      >
        {item.text}
      </div>
    </div>
  );

  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>自定义展示样式</p>
      <GridLayout
        data={data}
        columnNum={4}
        renderItem={renderItem}
      />
      <br />
      <p style={{ margin: '28px 0px 16px 16px' }}>默认展示样式</p>
      <GridLayout data={data} renderItem={renderItem1} />
    </div>
  );
};

export default Demo;
