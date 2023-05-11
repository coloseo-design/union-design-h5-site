/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../design.less';
import Anchor from '../../../components/anchor';
import Typography from '../../../components/typography';

const lay1 = require('./images/lay1.png');
const lay2 = require('./images/lay2.png');
const lay3 = require('./images/lay3.png');
const lay4 = require('./images/lay4.png');
const lay5 = require('./images/lay5.png');

const Layout = () => {
  const data = [
    {
      id: '1',
      anchor: 'grid',
      title: '基础栅格',
      description: [
        <div className="description-content">
          <div>由于设计稿基准尺寸输出为@2x尺寸，方便适配上下多种支持。</div>
          <div>因此，在@2x设计尺寸基于 4px 网格法来移动端的栅格的，建立 4px 为一个单位的网格，所有的元素尺寸都是 4 的倍数。使用 4 的倍数来定义模版块和内部元素的尺寸，填充和边距。使用 4px 网格法可以保证更统一的UI，更少的时间成本，更好的适应性从而规范自己的设计和开发，减少设计和开发的沟通时间，提高设计统一性。</div>
          <img src={lay1} style={{ maxWidth: 419.5 }} alt="" />
        </div>,
      ],
    },
    {
      id: '2',
      anchor: 'layout-b',
      title: '基础布局',
      description: [
        <div className="description-content">
          <div>从尽可能减少沟通金额适配的成本考虑，手机端除了不同DPI的屏幕外，还有全面屏和标准屏的存在。</div>
          <div>设计团队统一的设计画板尺寸为750 x 1334，需要技术对全面屏进行判断，加入Status Bars和Home Indicator的高度。</div>
          <img src={lay2} alt="" />
        </div>,
      ],
    },
    {
      id: '3',
      anchor: 'layout-g',
      title: '布局规范',
      description: [
        <div className="description-content">
          <div>在综合性应用中，除了新闻内容的浏览和办公处理场景，为了更好的展示不同的内容，我们对栅栏做了不同的规范。</div>
          <div> 平铺布局左右各32px的空间。</div>
          <div>卡片布局左右各24px空间，让卡片感更明晰，协调平铺布局。</div>
          <div>手机端的feed流和瀑布流的展示区同于传统网页的多栏方式，基本以组件纵向平铺的方式进行展示，所以在这里只对整栏的栏宽进行规范。</div>
          <img src={lay3} alt="" />
          <img src={lay4} alt="" style={{ marginTop: 24 }} />
        </div>,
      ],
    },
    {
      id: '4',
      anchor: 'height-g',
      title: '栅格规范',
      description: [
        <div className="description-content">
          <div>Uni Design 在移动端采用12栅格体系，以上线布局的结构为例，对内容区域进行了12上个的划分设置，如下图所示，我们的页面中的栅格Gutter设定了定值，即在不同尺寸的手机屏下，栅格的Column宽度会随之扩大或虽小，但Gutter的宽度值不变。在@2x分辨率下，Gutter分为三个 16px 24px 32px。</div>
          <img src={lay5} style={{ maxWidth: 610 }} alt="" />
        </div>,
      ],
    },
  ];
  return (
    <div className="designContainter">
      <div className="designbigTitle">布局</div>
      <div className="introduce">
        <div>空间布局是体系化视觉设计的起点，和传统的平面设计的不同之处在于，UI 界面的布局空间要基于「动态、体系化」的角度出发展开。</div>
        <div>从尽可能减少沟通金额适配的成本考虑，设计团队统一的设计画板尺寸为750 x 1334； 以“4”为一个进步，来调整元素间距及尺寸，这意味着paddiing、margin、sizing，都是4的倍数。</div>
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

export default Layout;
