import React from 'react';
import { ButtonList } from 'union-design-h5';

// start 自定义右侧buttonList // end
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
        buttonList={
          [
            <div style={{ border: '1px solid #c20000', height: 32, borderRadius: 4 }} key="1">自定义按钮</div>,
          ]
        }
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={iconList.slice(0, 2)}
        buttonList={
          [
            <div style={{ border: '1px solid #c20000', height: 32, borderRadius: 4 }} key="1">自定义按钮</div>,
          ]
        }
      />
      <div style={{ height: 20 }} />
      <ButtonList
        iconButtonList={[...iconList.slice(0, 2),
          <div key="icon">自定义</div>,
        ]}
        buttonList={
          [
            <div style={{ border: '1px solid #c20000', height: 32, borderRadius: 4 }} key="1">自定义按钮</div>,
          ]
        }
      />
    </div>
  );
};

export default Demo;
