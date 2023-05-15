import React from 'react';
import { ButtonList } from 'union-design-h5';

// start buttonList 默认样式（两个按钮） // end
const Demo = () => {
  const iconList = [
    {
      name: '保存',
      type: 'popup-window-line',
      onClick: () => console.log('保存'),
    },
    {
      name: '删除',
      type: 'delete',
      onClick: () => console.log('删除'),
    },
    {
      name: '更多',
      type: 'more',
      onClick: () => console.log('更多'),
    },
  ];

  const buttonList = [
    {
      name: '发送',
      onClick: () => console.log('发送'),
    },
    {
      name: '按钮',
      type: 'primary',
      onClick: () => console.log('按钮'),
    },
  ];

  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.02)', margin: '24px -12px' }}>
      <ButtonList
        iconButtonList={iconList.slice(0, 1)}
        buttonList={buttonList}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={iconList.slice(0, 2)}
        buttonList={buttonList}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={iconList.slice(0, 3)}
        buttonList={buttonList}
      />
    </div>
  );
};

export default Demo;
