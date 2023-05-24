/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import { ActionSheet, Icon, Toast } from 'union-design-h5';

// start 点击遮罩层关闭 // end
const DemoAction = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const options = [
    {
      name: '操作一',
      mainOperation: true,
    },
    {
      name: '操作二',
    },
    {
      name: '操作三',
    },
    {
      name: '操作四',
    },
  ];
  const style = {
    height: 44,
    width: '100%',
    cursor: 'pointer',
    alignItems: 'center',
    alignContent: 'center',
    borderBottom: '1px solid #EEF0F0',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 12,
  };
  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>上拉菜单基本样式</p>
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div style={{ ...style, border: 'none' }} onClick={() => setVisible(true)}>
          <div>点击遮罩层关闭</div>
          <Icon type="right" />
        </div>
        <div style={{ ...style, border: 'none' }} onClick={() => setVisible1(true)}>
          <div>自定义取消按钮文字</div>
          <Icon type="right" />
        </div>
        <div style={{ ...style, border: 'none' }} onClick={() => setVisible2(true)}>
          <div>不显示遮罩层</div>
          <Icon type="right" />
        </div>
      </div>
      <ActionSheet
        title="请选择"
        visible={visible}
        closeOnClickOverlay
        onCancel={() => {
          setVisible(false);
        }}
        onSelect={(opt) => Toast.info({ content: `您选择了：${opt.name}` })}
        options={options}
      />
      <ActionSheet
        title="请选择"
        visible={visible1}
        closeOnClickOverlay
        cancelText="Cancel"
        onCancel={() => {
          setVisible1(false);
        }}
        onSelect={(opt) => Toast.info({ content: `您选择了：${opt.name}` })}
        options={options}
      />
      <ActionSheet
        title="请选择"
        visible={visible2}
        closeOnClickOverlay
        cancelText="Cancel"
        overlay={false}
        onCancel={() => {
          setVisible2(false);
        }}
        onSelect={(opt) => Toast.info({ content: `您选择了：${opt.name}` })}
        options={options}
      />
    </div>

  );
};

export default DemoAction;
