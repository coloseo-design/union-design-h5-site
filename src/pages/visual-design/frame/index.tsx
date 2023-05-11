/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../design.less';
import Anchor from '../../../components/anchor';
import Typography from '../../../components/typography';

const f1 = require('./images/frame1.png');
const f2 = require('./images/frame2.png');

const ColorPage = () => {
  const data = [
    {
      id: '1',
      anchor: 'radius',
      title: '圆角',
      description: [
        <div className="description-content">
          <div>为了配合不同的情景情况下使用，我们提供了以下几种圆角样式，以供选择。</div>
          <img src={f1} alt="" />
        </div>,
      ],
    },
    {
      id: '2',
      anchor: 'shadow',
      title: '投影',
      description: [
        <div className="description-content">
          <div>在有强烈需要体现物理空间上下层的关系的情况下，我们可以使用投影，在此提供已下几种基础投影的方式。</div>
          <img src={f2} style={{ maxWidth: 634 }} alt="" />
        </div>,
      ],
    },
  ];
  return (
    <div className="designContainter">
      <div className="designbigTitle">框体</div>
      <div className="introduce">框体是设计元素的一个容器，是我们对框体进行统一规范，可用于按钮、卡片、弹窗等组件里。</div>
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
