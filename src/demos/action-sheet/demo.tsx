/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import { ActionSheet, Icon, Toast } from 'union-design-h5';

const a1 = require('./images/a1.png');
const a2 = require('./images/a2.png');
const a3 = require('./images/a3.png');
const a4 = require('./images/a4.png');
const a5 = require('./images/a5.png');
const a6 = require('./images/a6.png');
const a7 = require('./images/a7.png');
const a8 = require('./images/a8.png');
const a9 = require('./images/a9.png');
const a10 = require('./images/a10.png');

const DemoAction = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
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
  const option1 = [
    { name: '', src: a10, type: 'img' },
    { name: '', src: a10, type: 'img' },
    { name: '', src: a10, type: 'img' },
    { name: '', src: a10, type: 'img' },
    { name: '图片', src: <img src={a1} alt="1" style={{ width: 48, height: 48 }} />, type: 'img' },
    { name: '拍照', src: <img src={a2} alt="1" style={{ width: 48, height: 48 }} />, type: 'img' },
    { name: '文件', src: <img src={a3} alt="1" style={{ width: 48, height: 48 }} />, type: 'img' },
  ];
  const option2 = [
    { name: '微信', src: a5 },
    { name: '朋友圈', src: a6 },
    { name: 'qq', src: a7 },
    { name: '钉钉', src: a9 },
    { name: '分享链接', src: a4 },
  ];
  const option3 = [
    { name: '', src: a10, type: 'img' },
    { name: '', src: a10, type: 'img' },
    { name: '', src: a10, type: 'img' },
    { name: '', src: a10, type: 'img' },
    { name: '微信', src: a5 },
    { name: '朋友圈', src: a6 },
    { name: 'qq', src: a7 },
    { name: '钉钉', src: a9 },
    { name: '分享链接', src: a4 },
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
          <div>基本样式</div>
          <Icon type="right" />
        </div>
      </div>
      <p style={{ margin: '28px 0px 16px 16px' }}>上拉菜单面板样式</p>
      <div style={{ padding: '0px 12px', backgroundColor: '#fff', borderRadius: 8 }}>
        <div style={style} onClick={() => setVisible1(true)}>
          <div>上传面板样式</div>
          <Icon type="right" />
        </div>
        <div style={style} onClick={() => setVisible2(true)}>
          <div>分享面板样式</div>
          <Icon type="right" />
        </div>
        <div style={style} onClick={() => setVisible3(true)}>
          <div>多行分享面板样式</div>
          <Icon type="right" />
        </div>
        <div style={{ ...style, border: 'none' }} onClick={() => setVisible4(true)}>
          <div>指定每行数量面板</div>
          <Icon type="right" />
        </div>
      </div>
      <ActionSheet
        visible={visible}
        onCancel={() => setVisible(false)}
        onSelect={(opt) => Toast.info({ content: `您选择了：${opt.name}` })}
        options={options}
      />
      <ActionSheet
        visible={visible1}
        onCancel={() => setVisible1(false)}
        options={option1}
        type="upload"
        title="上传面板"
        currentCol={{ image: 4, icon: 4 }}
        multiple
      />
      <ActionSheet
        visible={visible2}
        onCancel={() => setVisible2(false)}
        options={option2}
        type="share"
        title="分享内容"
        currentCol={{ icon: 4 }}
        multiple
      />
      <ActionSheet
        visible={visible3}
        onCancel={() => setVisible3(false)}
        options={option3}
        type="share"
        title="分享到："
        multiple
      />
      <ActionSheet
        visible={visible4}
        onCancel={() => setVisible4(false)}
        options={option3}
        type="upload"
        title="多行分享："
        multiple
        currentCol={{ image: 5, icon: 5 }}
      />
    </div>

  );
};

export default DemoAction;
