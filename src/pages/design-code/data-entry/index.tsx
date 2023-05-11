/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
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

const data = [
  {
    id: 4,
    anchor: 'input-query',
    title: '输入框分类',
    description: [
      <div className="description-content">
        <div>输入框的形式分为有边框输入框和无边框输入框形式。</div>
        <div style={{ marginTop: 24 }}>有边框输入框：可在白背景或有背景色的情况下使用。</div>
        <div>无边框输入框：在白背景下使用。</div>
        <div>在输入框中添加图标：用于对输入框含义补充解释，提输入内容识别效率。</div>
        <img src={b1} style={{ maxWidth: 770.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 5,
    anchor: 'input-basic',
    title: '基本输入框',
    description: [
      <div className="description-content">
        <img src={b2} alt="" />
      </div>,
    ],
  },
  {
    id: 6,
    anchor: 'input-password',
    title: '密码输入框',
    description: [
      <div className="description-content">
        <img src={b3} alt="" />
      </div>,
    ],
  },
  {
    id: 7,
    anchor: 'input-text',
    title: '文字输入框',
    description: [
      <div className="description-content">
        <img src={b4} style={{ maxWidth: 786.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 8,
    anchor: 'input-search',
    title: '搜索输入栏',
    description: [
      <div className="description-content">
        <img src={b5} style={{ maxWidth: 786.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 9,
    anchor: 'data-entry1',
    title: '数据录入',
    description: [
      <div className="description-content">
        <img src={b6} style={{ maxWidth: 786.5 }} alt="" />
        <img src={b7} style={{ maxWidth: 786.5, marginTop: 24 }} alt="" />
        <img src={b8} style={{ maxWidth: 786.5, marginTop: 24 }} alt="" />
      </div>,
    ],
  },
  {
    id: 10,
    anchor: ' process-entry',
    title: '流程录入',
    description: [
      <div className="description-content">
        <img src={b9} style={{ maxWidth: 787.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 11,
    anchor: 'scroll-select',
    title: '滚动选择器',
    description: [
      <div className="description-content">
        <div>需要页面选择触发，最少1个选择，最多3个选项；可以用于时间选择。</div>
        <img src={b10} style={{ maxWidth: 794 }} alt="" />
      </div>,
    ],
  },
  {
    id: 12,
    anchor: 'cascader1',
    title: '级连选择器',
    description: [
      <div className="description-content">
        <div>需要页面选择触发，最少2个选择，最多3个选项；可用于地址类的内容选择，选择器的上半部分可以添加标签区域减少查询时间。</div>
        <img src={b11} style={{ maxWidth: 787.5 }} alt="" />
        <img src={b12} style={{ maxWidth: 787.5, marginTop: 24 }} alt="" />
      </div>,
    ],
  },
  {
    id: 13,
    anchor: 'list-select',
    title: '列表选择器',
    description: [
      <div className="description-content">
        <div>需要页面选择触发，最少2个列表内容，建议不要超过12个列表内容。</div>
        <img src={b13} style={{ maxWidth: 788.5 }} alt="" />
      </div>,
    ],
  },
];
const Button = () => (
  <div className="codeContainter">
    <div className="codebigTitle">数据录入</div>
    <div className="introduce">
      数据录入（input）是获取对象信息的重要交互方式，用户会频繁的增加、修改或删除信息。多种多样的文本录入和选择录入方式帮助用户更加清晰和高效的完成这项体验。在设计规范中，数据录入被分为三大类：文本录入、选择录入、文件上传。
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
