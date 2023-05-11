/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../code.less';
import Anchor from '../../../components/anchor';
import Typography from '../../../components/typography';

const b1 = require('./images/n1.png');
const b2 = require('./images/n2.png');
const b3 = require('./images/n3.png');
const b4 = require('./images/n4.png');
const b5 = require('./images/n5.png');
const b6 = require('./images/n6.png');
const b7 = require('./images/n7.png');
const b8 = require('./images/n8.png');
const b9 = require('./images/n9.png');
const b10 = require('./images/n10.png');
const b11 = require('./images/n11.png');

const data = [
  {
    id: 4,
    anchor: 'nav-query',
    title: '系统导航栏',
    description: [
      <div className="description-content">
        <div>系统自带的内容提示功能。</div>
        <img src={b1} alt="" />
      </div>,
    ],
  },
  {
    id: 5,
    anchor: 'nav-first',
    title: '一级导航栏',
    description: [
      <div className="description-content">
        <div>定位现在的所在页面，同时附加全局功能。</div>
        <img src={b2} style={{ maxWidth: 375 }} alt="" />
      </div>,
    ],
  },
  {
    id: 6,
    anchor: 'nav-second',
    title: '二级导航栏',
    description: [
      <div className="description-content">
        <div>定位现在所在页面，同时并附加功能使用。以下提供常用的模板，如需功能需要可自行在左右两边添加功能，icon或按钮，每个元素之间的有效间距为24px或32px。</div>
        <img src={b3} style={{ maxWidth: 810.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 7,
    anchor: 'nav-ftab',
    title: '一级标签导航栏',
    description: [
      <div className="description-content">
        <div>一级标签导航用于从一个比较高的层级来组织信息，呈现出提纲挈领的效果。例如，使用标签呈现报纸的不同版面。不要使用标签导航来呈现不同页码的页面（就像搜索结果页中的第1页，第2页那种页面），也不要把标签的切换设计成可循环的样式。</div>
        <img src={b4} style={{ maxWidth: 787.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 8,
    anchor: 'nav-stab',
    title: '二级标签导航栏',
    description: [
      <div className="description-content">
        <div>二级级标签导航用于从一个归类的角度来组织信息，呈现归类查询的的效果。</div>
        <img src={b5} style={{ maxWidth: 455 }} alt="" />
      </div>,
    ],
  },
  {
    id: 9,
    anchor: 'nav-task',
    title: '任务导航栏',
    description: [
      <div className="description-content">
        <div>凸显任务量为主的导航栏，可以切换内容。提供3栏和4栏的形式。大小任务导航可根据实际情况进行选择。</div>
        <img src={b6} style={{ maxWidth: 811.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 10,
    anchor: 'tabbar',
    title: 'tabbar',
    description: [
      <div className="description-content">
        <div>主要使用在一级页面，用于切换不同属性的类目。</div>
        <img src={b7} style={{ maxWidth: 375 }} alt="" />
      </div>,
    ],
  },
  {
    id: 11,
    anchor: 'tabbar-fun',
    title: 'tabbar功能栏',
    description: [
      <div className="description-content">
        <div>主要应用在二级页面，如页面有操作需求的时候可以使用此组件。</div>
        <img src={b8} style={{ maxWidth: 375 }} alt="" />
      </div>,
    ],
  },
  {
    id: 12,
    anchor: 'nav-select',
    title: '下拉筛选',
    description: [
      <div className="description-content">
        <div>需要进行筛选功能时使用。</div>
        <img src={b9} alt="" />
        <img src={b10} style={{ maxWidth: 787.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 13,
    anchor: 'nav-index',
    title: '索引栏',
    description: [
      <div className="description-content">
        <div>用字母排列的索引方式。</div>
        <img src={b11} style={{ maxWidth: 787 }} alt="" />
      </div>,
    ],
  },
];
const Button = () => (
  <div className="codeContainter">
    <div className="codebigTitle">导航</div>
    <div className="introduce">
      明确知晓当前所处产品中的位置，并方便快捷地带用户到他想去的地方。正确理解和使用导航组件对产品全局体验至关重要。
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
