/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../design.less';
import Anchor from '../../../components/anchor';
import Typography from '../../../components/typography';

const icon1 = require('./images/icon.png');
const icon2 = require('./images/icon2.png');
const icon3 = require('./images/icon3.png');
const icon4 = require('./images/icon4.png');

const Icon = () => {
  const data = [
    {
      id: '1',
      anchor: 'icon-b',
      title: '系统基础图标',
      description: [
        <div className="description-content">
          <img src={icon1} style={{ maxWidth: 496 }} alt="" />
        </div>,
      ],
    },
    {
      id: '2',
      anchor: 'icon-inline',
      title: '系统内应用图标',
      description: [
        <div className="description-content">
          <div>所有应用类图标都是有底板和图标两部分构成。根据应用不用的应用领域对其颜色和icon的样式从两个维度进行了设计规范。并对色彩和应用类别之间建立的直接联系。</div>
          <div>红色：跟集团党政先关业务；</div>
          <div>橘色：法务类业务；</div>
          <div>橙色：沃系列或生活服务类业务；</div>
          <div>蓝色：办公类业务；</div>
          <div>蓝绿：审批类业务。</div>
          <img src={icon2} alt="" />
        </div>,
      ],
    },
    {
      id: '3',
      anchor: 'icon-share',
      title: '分享到第三方图标',
      description: [
        <div className="description-content">
          <div>用于分享界面，可以根据实际使用需求进行添加。</div>
          <img src={icon3} style={{ maxWidth: 280 }} alt="" />
        </div>,
      ],
    },
    {
      id: '4',
      anchor: 'icon-toast',
      title: '轻提示图标',
      description: [
        <div className="description-content">
          <div>当页面出现反馈信息时出现的提示内容。</div>
          <img src={icon4} style={{ maxWidth: 776 }} alt="" />
        </div>,
      ],
    },
  ];
  return (
    <div className="designContainter">
      <div className="designbigTitle">系统图标</div>
      <div className="introduce">
        <div>图标是 UI 设计中必不可少的组成。通常我们理解图标设计的含义，是将某个概念转换成清晰易读的图形，从而降低用户的理解成本，提升界面的美观度。在我们的企业级应用设计范围中，图标在界面设计的诸多元素中往往只占了很小的比重，在调用时也会被缩到比设计稿小很多倍的尺寸，加上在图形素材极度丰富并且便于获取的今天，在产品设计体系中实现一套美观、一致、易用、便于延展的图标体系往往会被不小心忽略掉。uni Design 相信一整套优质的图标对于设计质量的影响是非常巨大的，这考验着设计师的协作能力，以及对图形塑造的系统性思维，同时也能反映一个团队对于细节的追求。</div>
      </div>
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

export default Icon;
