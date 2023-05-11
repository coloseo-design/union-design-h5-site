/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../code.less';
import Anchor from '../../../components/anchor';
import Typography from '../../../components/typography';

const b1 = require('./images/1@2x.png');
const b2 = require('./images/2@2x.png');
const b3 = require('./images/3@2x.png');
const b4 = require('./images/4@2x.png');
const b5 = require('./images/5@2x.png');
const b6 = require('./images/6@2x.png');
const b7 = require('./images/7@2x.png');
const b8 = require('./images/8@2x.png');
const b9 = require('./images/9@2x.png');
const b10 = require('./images/10@2x.png');
const b11 = require('./images/11@2x.png');
const b12 = require('./images/12@2x.png');
const b13 = require('./images/13@2x.png');
const b14 = require('./images/14@2x.png');

const data = [
  {
    id: 4,
    anchor: 'table-header',
    title: '常规页面主要表头',
    description: [
      <div className="description-content">
        <div>应用场景：强调列表的内容场景下使用。</div>
        <img src={b1} style={{ maxWidth: 795 }} alt="" />
      </div>,
    ],
  },
  {
    id: 5,
    anchor: 'table-subheader',
    title: '常规页面次要表头',
    description: [
      <div className="description-content">
        <div>应用场景：列表信息的重要性高过标题的信息，标题只是归纳提醒的作用。</div>
        <img src={b2} style={{ maxWidth: 795 }} alt="" />
      </div>,
    ],
  },
  {
    id: 6,
    anchor: 'card-header',
    title: '卡片类表头',
    description: [
      <div className="description-content">
        <div>应用场景：用于归类卡片列表的内容。</div>
        <img src={b3} style={{ maxWidth: 771 }} alt="" />
      </div>,
    ],
  },
  {
    id: 7,
    anchor: 'c-list',
    title: '此列表',
    description: [
      <div className="description-content">
        <div>应用场景：用于纯文字索引目录的展示。</div>
        <img src={b4} style={{ maxWidth: 786.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 8,
    anchor: 'list-normal',
    title: '一般列表',
    description: [
      <div className="description-content">
        <img src={b5} style={{ maxWidth: 786.5 }} alt="" />
        <img src={b6} style={{ maxWidth: 786.5, marginTop: 40 }} alt="" />
        <img src={b7} style={{ maxWidth: 786.5, marginTop: 40 }} alt="" />
      </div>,
    ],
  },
  {
    id: 9,
    anchor: 'list-big',
    title: '大列表',
    description: [
      <div className="description-content">
        <img src={b8} style={{ maxWidth: 786.5 }} alt="" />
        <img src={b9} style={{ maxWidth: 786.5, marginTop: 40 }} alt="" />
        <img src={b10} style={{ maxWidth: 786.5, marginTop: 40 }} alt="" />
      </div>,
    ],
  },
  {
    id: 10,
    anchor: 'list-mobile',
    title: '通讯录列表',
    description: [
      <div className="description-content">
        <img src={b11} style={{ maxWidth: 786.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 11,
    anchor: 'basic-tab',
    title: '基础标签',
    description: [
      <div className="description-content">
        <img src={b12} style={{ maxWidth: 199 }} alt="" />
      </div>,
    ],
  },
  {
    id: 12,
    anchor: 'avatar-data',
    title: '头像展示',
    description: [
      <div className="description-content">
        <div>所有头像默认生成尺寸为512px，文字取姓名的最后两个字。底板颜色根据以下色彩随机生成。允许用户自行上传头像。</div>
        <img src={b13} alt="" />
      </div>,
    ],
  },
  {
    id: 13,
    anchor: 'grid-data',
    title: '宫格',
    description: [
      <div className="description-content">
        <div>展示列表的内容的标题信息，根据不同场景使用不同表头。</div>
        <img src={b14} style={{ maxWidth: 870 }} alt="" />
      </div>,
    ],
  },
];
const Button = () => (
  <div className="codeContainter">
    <div className="codebigTitle">数据展示-通用</div>
    <div className="introduce">
      <div>利用模块化的思维，建立整个页面上数据展示系统，每一个数据分场景情况被抽象成列表上组件，让其在设计中，方便使用和选取</div>
      <div>通用数据展示-主要是一些常见且经常会使用到的内容呈现形式。</div>
    </div>
    <div style={{ marginTop: 40 }}>
      <Anchor position="static" color="#5C57F2" dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    </div>
    {(data || []).map((item) => (
      <Typography
        id={`${item.anchor}`}
        title={<div className="description-title">{item.title}</div>}
        descriptions={item.description}
      />
    ))}
    <Anchor dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    <div />
  </div>
);

export default Button;
