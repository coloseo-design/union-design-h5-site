/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../design.less';
import Anchor from '../../../components/anchor';
import Typography from '../../../components/typography';

const c1 = require('./images/c1.png');
const c2 = require('./images/c2.png');
const c3 = require('./images/c3.png');
const c4 = require('./images/c4.png');
const c5 = require('./images/c5.png');
const c6 = require('./images/c6.png');

const ColorPage = () => {
  const data = [
    {
      id: '1',
      anchor: 'theme',
      title: '主题色',
      description: [
        <div className="description-content">
          <div>主要品牌颜色是醒目且冷艳的红色。</div>
          <img src={c1} alt="" style={{ maxWidth: 610 }} />
        </div>,
      ],
    },
    {
      id: '2',
      anchor: 'function',
      title: '功能辅助色',
      description: [
        <div className="description-content">
          <div>除了主色之外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</div>
          <img src={c2} alt="" />
          <img src={c3} alt="" style={{ marginTop: 40 }} />
          <img style={{ maxWidth: 320, objectFit: 'contain', marginTop: 40 }} src={c4} alt="" />
          <img src={c5} alt="" style={{ marginTop: 40 }} />
        </div>,
      ],
    },
    {
      id: ' 3',
      anchor: 'neutral',
      title: '中性色',
      description: [
        <div className="description-content">
          <div>中性色适用于文本，背景和边框的颜色。通过运用不同的中性色，来表现层次结构。</div>
          <img src={c6} alt="" />
        </div>,
      ],
    },
  ];
  return (
    <div className="designContainter">
      <div className="designbigTitle">色彩</div>
      <div className="introduce">中国联通设计规范中将色彩体系解读成两个层面：系统级色彩体系和产品级色彩体系。 系统级色彩体系：主要定义了设计规范中的基础色板、中性色板和数据可视化色板； 产品级色彩体系：则是在具体设计过程中，基于系统色彩进一步定义符合产品调性以及功能诉求的颜色。</div>
      <div style={{ marginTop: 40 }}>
        <Anchor position="static" color="#D6386B" dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
      </div>
      {(data || []).map((item) => (
        <Typography
          id={item.anchor}
          title={<div className="description-title">{item.title}</div>}
          descriptions={item.description}
        />
      ))}
      <Anchor dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    </div>
  );
};

export default ColorPage;
