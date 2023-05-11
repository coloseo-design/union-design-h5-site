/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../code.less';
import Anchor from '../../../components/anchor';
import Typography from '../../../components/typography';

const b1 = require('./images/b1.png');
const b2 = require('./images/b2.png');
const b3 = require('./images/b3.png');
const b4 = require('./images/b4.png');
const b5 = require('./images/b5.png');
const b6 = require('./images/b6.png');
const b7 = require('./images/b7.png');
const b8 = require('./images/b8.png');
const b9 = require('./images/b9.png');

const data = [
  {
    id: 4,
    anchor: 'button-query',
    title: '按钮分类',
    description: [
      <div className="description-content">
        <div>主按钮：突出“完成”、“推荐”类操作；一个按钮区最多使用一个主按钮。</div>
        <div> 次按钮：常规按钮，用于非主要动作。如果不确定选择哪种按钮，次按钮永远是最安全的选择。</div>
        <div> 在按钮中添加图标：用于对按钮含义补充解释，提高按钮识别效率。</div>
        <img src={b1} style={{ maxWidth: 538.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 5,
    anchor: 'button-big',
    title: '大按钮',
    description: [
      <div className="description-content">
        <div>在整个页面中出现的需要操作或判断时进行使用。</div>
        <img src={b2} style={{ maxWidth: 821.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 6,
    anchor: 'button-mid',
    title: '中按钮',
    description: [
      <div className="description-content">
        <div>主要是使用在tabbar上。</div>
        <img src={b3} style={{ maxWidth: 604.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 7,
    anchor: 'button-ci',
    title: '次按钮-响应随动',
    description: [
      <div className="description-content">
        <div>主要是使用在tabbar上，用于需要进行统计的内容判断。</div>
        <img src={b4} style={{ maxWidth: 157 }} alt="" />
      </div>,
    ],
  },
  {
    id: 8,
    anchor: 'button-select',
    title: '选择按钮',
    description: [
      <div className="description-content">
        <div>主要是使用在tabbar上，当判断需要是非选择时使用。</div>
        <img src={b5} style={{ maxWidth: 302 }} alt="" />
      </div>,
    ],
  },
  {
    id: 9,
    anchor: 'button-toast',
    title: '轻按钮',
    description: [
      <div className="description-content">
        <div>主要是使用列表中。</div>
        <img src={b6} style={{ maxWidth: 331.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 10,
    anchor: 'text',
    title: '文字类',
    description: [
      <div className="description-content">
        <div>弱化的按钮，采用更轻量的按钮样式，可用于需大面积展示按钮场景，例如表格组件中的操作列。也可是当需要语意准确无误的传递信息时，或有其他icon类按钮存在时，有需要明确关键操作的语音时可使用纯文字按钮。</div>
        <div>提供三种不同尺寸的按钮大小，配合不同的列高使用。</div>
        <img src={b7} style={{ maxWidth: 420 }} alt="" />
      </div>,
    ],
  },
  {
    id: 11,
    anchor: 'button-icon',
    title: '图标类',
    description: [
      <div className="description-content">
        <div>图标提供视觉线索，避免逐字阅读按钮文案，更高效地使用界面。</div>
        <div style={{ marginTop: 24 }}> - 需要在较小的空间内展示尽量多的按钮。</div>
        <div>- 使用纯图标按钮必须有 Tooltip 提示按钮含义。</div>
        <img src={b8} style={{ maxWidth: 228.5 }} alt="" />
      </div>,
    ],
  },
  {
    id: 12,
    anchor: 'button-shape',
    title: '图形类',
    description: [
      <div className="description-content">
        <div>类型形添加按钮：用于添加与之同形的内容。例如：头像是圆形的可使用圆形添加按钮。应用icon是圆角方形则使用圆角方形添加按钮。</div>
        <img src={b9} alt="" />
      </div>,
    ],
  },
];
const Button = () => (
  <div className="codeContainter">
    <div className="codebigTitle">按钮</div>
    <div className="introduce">
      按钮是一种使用广泛的基础界面元素，作为call to action（行为召唤）的基础行为诱导元素，用户行为是透过设计召唤出来的，用户在过程中并不会觉得是被强迫的，而是出于自愿的，但实际上用户的自愿行为是被设计师设计好的。正因其使用的普遍性和重要性，因此有必要建立约束又包容的规范，以广泛满足多层级、跨场景的设计需要。在制定规则时，原则是简单易记（约束）并满足企业级场景的广泛兼容（包容），把问题最少化。我们的解决方案是： 「默认规则」：提供一套默认的设计规则，在现有的模板、组件等设计资产中提供示例方案，满足简单场景需求，直接使用即可； 「设计建议」：为默认规则无法满足的复杂场景提供设计建议，让使用者在一定的策略上自定义，同时又与默认规则保持一致的认知逻辑； 「设计目标」：明确设计目标，设计者依据设计目标决策设计。
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
