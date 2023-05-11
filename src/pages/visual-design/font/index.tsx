/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../design.less';
import Anchor from '../../../components/anchor';
import Typography from '../../../components/typography';

const f1 = require('./images/f1.png');
const f2 = require('./images/f2.png');
const f3 = require('./images/f3.png');
const f4 = require('./images/f4.png');
const f5 = require('./images/f5.png');
const f6 = require('./images/f6.png');
const f7 = require('./images/f7.png');

const Font = () => {
  const data = [
    {
      id: '1',
      anchor: 'font-w',
      title: '字体',
      description: [
        <div className="description-content">
          <div>我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</div>
          <div>——参见以下图例</div>
          <img src={f1} alt="" />
        </div>,
      ],
    },
    {
      id: '2',
      anchor: 'font-s',
      title: '字号',
      description: [
        <div className="description-content">
          <div>建议在⼀个系统设计中，字阶（字号）的选择尽量控制在 3-5 种之间，保持克制的原则。</div>
          <div>——参见以下图例</div>
          <img src={f2} alt="" />
        </div>,
      ],
    },
    {
      id: '3',
      anchor: 'line-height',
      title: '行高',
      description: [
        <div className="description-content">
          <div>单行文本建议使用无行高或是经凑行高，多行文本建议使用常规或是宽松行高。</div>
          <div>——参见以下图例</div>
          <img style={{ maxWidth: 791.5 }} src={f3} alt="" />
        </div>,
      ],
    },
    {
      id: '4',
      anchor: 'height-b',
      title: '行高标准',
      description: [
        <div className="description-content">
          <img src={f4} alt="" />
          <img src={f5} alt="" style={{ marginTop: 40 }} />
          <img src={f6} alt="" style={{ marginTop: 40 }} />
        </div>,
      ],
    },
    {
      id: '5',
      anchor: 'content',
      title: '段落文字内容',
      description: [
        <div className="description-content">
          <div>主要使用在详情页或需要大量阅读的内容。</div>
          <div>——参见以下图例</div>
          <img src={f7} alt="" />
        </div>,
      ],
    },
  ];
  return (
    <div className="designContainter">
      <div className="designbigTitle">文字</div>
      <div className="introduce">我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</div>
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

export default Font;
