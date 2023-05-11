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
    anchor: 'tooltip-feed',
    title: '气泡提醒',
    description: [
      <div className="description-content">
        <div>长触摸产生控制方式。</div>
        <img src={b1} alt="" />
      </div>,
    ],
  },
  {
    id: 5,
    anchor: 'toast-feed',
    title: '轻提示',
    description: [
      <div className="description-content">
        <div>一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。</div>
        <img src={b2} style={{ maxWidth: 789.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 6,
    anchor: 'pullrefresh-feed',
    title: '下拉提示',
    description: [
      <div className="description-content">
        <div>页面的下滑后的加载提示。</div>
        <img src={b3} style={{ maxWidth: 789.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 7,
    anchor: 'tix',
    title: '屏幕提醒',
    description: [
      <div className="description-content">
        <div>当页面级的操作需要有数据判断时，出现的提示内容。</div>
        <img src={b4} style={{ maxWidth: 425 }} alt="" />
      </div>,
    ],
  },
  {
    id: 8,
    anchor: 'progress-feed',
    title: '加载条',
    description: [
      <div className="description-content">
        <img src={b5} style={{ maxWidth: 343 }} alt="" />
      </div>,
    ],
  },
  {
    id: 9,
    anchor: 'modal-feed',
    title: '弹窗提醒',
    description: [
      <div className="description-content">
        <img src={b6} style={{ maxWidth: 646 }} alt="" />
        <img src={b7} style={{ maxWidth: 646, marginTop: 24 }} alt="" />
        <img src={b8} style={{ maxWidth: 646, marginTop: 24 }} alt="" />
        <img src={b9} style={{ maxWidth: 646, marginTop: 24 }} alt="" />
      </div>,
    ],
  },
  {
    id: 10,
    anchor: 'actionsheet-f',
    title: '上拉弹出层',
    description: [
      <div className="description-content">
        <img src={b10} alt="" />
        <img src={b11} style={{ marginTop: 24, maxWidth: 787.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 11,
    anchor: 'notice-feed',
    title: '通知&提醒',
    description: [
      <div className="description-content">
        <div>出现在导航栏下方的信息内容。</div>
        <img src={b12} alt="" />
      </div>,
    ],
  },
  {
    id: 12,
    anchor: 'message-notice',
    title: '信息通知',
    description: [
      <div className="description-content">
        <div>页面内容更新的通知查看样式。</div>
        <img src={b13} style={{ maxWidth: 764 }} alt="" />
      </div>,
    ],
  },
  {
    id: 13,
    anchor: 'message-error',
    title: '输入框输入错误提示',
    description: [
      <div className="description-content">
        <img src={b14} style={{ maxWidth: 375 }} alt="" />
      </div>,
    ],
  },
];
const PromptFeedback = () => (
  <div className="codeContainter">
    <div className="codebigTitle">提示与反馈</div>
    <div className="introduce">
      <div>用于在必要时向用户反馈操作结果或传达消息。</div>
      <div> 设计目标：在不同事件下用户都能感知与操作场景和紧急程度匹配的结果反馈或消息提示，做到合理有效的信息传达。</div>
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

export default PromptFeedback;
