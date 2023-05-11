/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import '../design.less';
import Anchor from '../../../components/anchor';
import Typography from '../../../components/typography';

const b1 = require('./images/1@2x.png');
const b2 = require('./images/2@2x.png');
const b3 = require('./images/3@2x.png');
const b4 = require('./images/4@2x.png');
const b5 = require('./images/5@2x.png');
const b6 = require('./images/6@2x.png');
const b7 = require('./images/7@2x.png');

const data = [
  {
    id: 1,
    anchor: 'theme',
    title: '主题质感',
    description: [
      <div className="description-content" key="1">
        <div>垂直的光照方向，由浅到深。</div>
        <img src={b1} alt="" style={{ maxWidth: 630 }} />
      </div>,
    ],
  },
  {
    id: 2,
    anchor: 'auxiliary',
    title: '辅助质感',
    description: [
      <div className="description-content" key="2">
        <div>表现左上方45°的光照效果，主要用于功能图标基底上，起到辅助区分分类的作用。</div>
        <img src={b2} alt="" style={{ maxWidth: 630 }} />
        <img src={b3} alt="" style={{ maxWidth: 630, marginTop: 40 }} />
        <img src={b4} alt="" style={{ maxWidth: 630, marginTop: 40 }} />
        <img src={b5} alt="" style={{ maxWidth: 630, marginTop: 40 }} />
        <img src={b6} alt="" style={{ maxWidth: 630, marginTop: 40 }} />
      </div>,
    ],
  },
  {
    id: 3,
    anchor: 'function1',
    title: '功能质感',
    description: [
      <div key="2" className="description-content">
        <div>表现右下方45°的照明效果，主要用于tabbar的图标的点击后效果，从视觉上强化突出。</div>
        <div>这里的色彩需要单独利用HSB所有渐变都是以主题色为基准对HSB进行调节，产生一个新的亮度色，让亮度、饱和度和冷暖趋向改变跟主题色进行对比，光原色和原色间ACS值为1.70误差不超过0.1。</div>
        <img src={b7} alt="" style={{ maxWidth: 300 }} />
      </div>,
    ],
  },
];
const Texture = () => (
  <div className="designContainter">
    <div className="designbigTitle">质感</div>
    <div className="introduce">
      <div>渐变色可以是一种颜色也可以是一种质感的表现，现实世界中因为有光的存在，才有了色彩。即使一个大面积的色块，在光的作用下，颜色也会产生细微的变化，这是一种微妙的质感体现，是一种存在的不存在感，这样的感知体验给人柔和舒适感。</div>
      <div>整体的质感体验设计利用选择色生成的色阶的临近色阶的浅色色彩为光照色，利用弱对比来弱化紧张感，让色彩间的对比感知柔和，给在办公应用产品上，加入软性的体验。</div>
    </div>
    <div style={{ marginTop: 40 }}>
      <Anchor position="static" color="#D6386B" dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    </div>
    {(data || []).map((item) => (
      <Typography
        id={`${item.anchor}`}
        title={<div className="description-title">{item.title}</div>}
        descriptions={item.description}
        key={item.anchor}
      />
    ))}
    <Anchor dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    <div />
  </div>
);

export default Texture;
