/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React from 'react';
import './index.less';
import Anchor from '../../../components/anchor';
import Typography from '../../../components/typography';

const data = [
  {
    id: 4,
    anchor: 'low',
    title: '低密度',
    description: [
      <div className="description-content">
        <div>空间的大小以及空间中元素中的多少，对人的情绪感知都有着影响。这都取决于空间和元素之间的密度关系。 功能上：空间中的元素，密度越低，所有的元素在空间内的存在度越高，越容易被感知和观察。密度越高，元素的信息就需要大脑更多的时间去做区分，从格式塔心理的学的角度来说，这都是人大脑本能的处理机制，会划分元素的信息内容，但过度的信息内容也会降低或是打断信息的处理。 情感上：空间中的元素，密度越低，让人越轻松和舒适。元素越多。密度越高，让人的情绪也越紧张。</div>
        <div style={{ marginTop: 24 }}>作为办公系统不同于门户新闻类产品，需要方便的快捷的处理信息和任务，而不是信息上的高负荷轰炸。uniDesign提出了低密度的概念，更大的呼吸空间，清晰的内容呈现。而这些都建立在空间比例这一标准下，每一区块的内容与空间的比例保持在1:2-1:1.5之前，信息和信息之间的空间比是1:2，让信息呈现更清晰明了，同时也降低了同一屏幕所展示的内容，这样在有限的空间中获取非同类信息种类减少，能有效的聚焦在需要处理的信息上。</div>
      </div>,
    ],
  },
  {
    id: 5,
    anchor: 'reason',
    title: '生长',
    description: [<div className="description-content">已手机端为主导的移动办方式，以一个点由上至下的方式进行生长。利用瀑布流的形式展示信息内容。</div>],
  },
  {
    id: 6,
    anchor: 'efficient',
    title: '舒适',
    description: [<div className="description-content">通过使用统一的设计语言与交互形式，给用户简单的操作适合手机端的操作逻辑。</div>],
  },
];
const Design = () => (
  <div className="designContainer">
    <div className="bigTitle">设计原则</div>
    <div className="introduce">
      <div>
        中国联通企业级设计系统是一个庞大且复杂的体系。团队经过大量的项目实践和总结，正在逐步打磨一个服务于企业级产品的设计系统。
      </div>
      <div>
        企业级后台产品不仅量级巨大且功能复杂，常常需要设计与开发能够快速的做出响应。
      </div>
      <div>
        这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
      </div>
      <div>我们基于web端“理性”“一致”“高效”“生长”的设计价值观，针对移动端的特点，加入了“低密度”“生长”“舒适”的设计原则，更好的为移动端的场景服务，运用模块化的解决方案，降低冗余的生产成本，让设计者更好的专注于用户体验。</div>
    </div>
    <div style={{ marginTop: 40 }}>
      <Anchor position="static" color="#D1373D" dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
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

export default Design;
