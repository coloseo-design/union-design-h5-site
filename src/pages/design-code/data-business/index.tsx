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

const data = [
  {
    id: 4,
    anchor: 'moilelist-b',
    title: '通讯录列表',
    description: [
      <div className="description-content">
        <img src={b1} style={{ maxWidth: 375 }} alt="" />
      </div>,
    ],
  },
  {
    id: 5,
    anchor: 'await',
    title: '待办待阅列表',
    description: [
      <div className="description-content">
        <img src={b2} style={{ maxWidth: 788 }} alt="" />
      </div>,
    ],
  },
  {
    id: 6,
    anchor: 'news-list',
    title: '新闻列表',
    description: [
      <div className="description-content">
        <img src={b3} style={{ maxWidth: 788 }} alt="" />
        <img src={b4} style={{ maxWidth: 788, marginTop: 40 }} alt="" />
      </div>,
    ],
  },
  {
    id: 7,
    anchor: 'new-detail',
    title: '新闻详情页',
    description: [
      <div className="description-content">
        <img src={b5} style={{ maxWidth: 786.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 8,
    anchor: 'back-list',
    title: '回复内容列表',
    description: [
      <div className="description-content">
        <img src={b6} style={{ maxWidth: 787.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 9,
    anchor: 'approval-list',
    title: '审批类卡片列表',
    description: [
      <div className="description-content">
        <img src={b7} style={{ maxWidth: 787.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 10,
    anchor: 'approval-detaill',
    title: '审批类详情页',
    description: [
      <div className="description-content">
        <img src={b8} style={{ maxWidth: 787.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 11,
    anchor: 'porcess-b',
    title: '流程列表',
    description: [
      <div className="description-content">
        <img src={b9} style={{ maxWidth: 767.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 12,
    anchor: 'porcess-b1',
    title: '全局搜索列表',
    description: [
      <div className="description-content">
        <img src={b10} style={{ maxWidth: 787.5 }} alt="" />
      </div>,
    ],
  },
];
const Button = () => (
  <div className="codeContainter">
    <div className="codebigTitle">数据展示-业务</div>
    <div className="introduce">
      <div>利用模块化的思维，建立整个页面上数据展示系统，每一个数据分场景情况被抽象成列表上组件，让其在设计中，方便使用和选取。</div>
      <div>业务数据展示-数据展示内容更偏重企业应用原有的功能和信息进行抽象展示。</div>
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
