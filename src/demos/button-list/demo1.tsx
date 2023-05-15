import React from 'react';
import { ButtonList } from 'union-design-h5';

// start buttonList 一个按钮 // end
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

  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.02)', margin: '24px -12px' }}>
      <ButtonList
        iconButtonList={iconList.slice(0, 1)}
        buttonList={[
          {
            type: 'primary',
            name: '发送',
            onClick: () => {
              console.log('==eeee');
            },
          },
        ]}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={iconList.slice(0, 2)}
        buttonList={[
          {
            type: 'primary',
            name: '发送',
            onClick: () => {
              console.log('==eeee');
            },
          },
        ]}
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={iconList.slice(0, 3)}
        buttonList={[
          {
            type: 'primary',
            name: '发送',
            onClick: () => {
              console.log('==eeee');
            },
          },
        ]}
      />
    </div>
  );
};

export default Demo;
