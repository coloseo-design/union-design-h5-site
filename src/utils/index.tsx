/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prop-types */
import React from 'react';
import * as PageComponents from '../docs';
import HowUse from '../pages/how-use';
import './assets/layout.less';
import * as TestDemo from '../allDemos';
import * as TestCode from '../codes';
import Copy from './copy';
import { rename, element } from './fun';

export interface PageProps {
  name: string;
}

export const BasePageComponent: React.FC<PageProps> = (props) => {
  const { name } = props;
  if (name === 'how-use') {
    return (
      <div className="box">
        <HowUse />
      </div>
    );
  }
  const componentName: string = rename(name);
  const data = (PageComponents as any)[componentName];
  const demos = Object.keys(TestDemo);
  const currentList = demos.filter((i) => i.startsWith(`${componentName}Demo`));
  const list = Object.entries(TestDemo);
  const testCurrent = list.filter((i) => currentList.indexOf(i[0]) >= 0);
  const index = (data.content.children[0].children || []).map((i: any) => i.children).indexOf('API');
  const title = {
    attrs: {},
    children: data.content.children[0].children.slice(0, index),
    tag: 'article',
  };
  const des = {
    attrs: {},
    children: data.content.children[0].children.slice(index + 1),
    tag: 'article',
  };

  const iframePath = process.env.NODE_ENV === 'development' ? `${window.location.origin}` : `${window.location.origin}/h5`;
  return (
    <div className="box">
      <div style={{ width: '100%' }}>
        {element(title)}
        <article>
          <h2 style={{ marginTop: 48 }} id={`${name}-代码演示`}>代码演示</h2>
        </article>
      </div>
      {testCurrent.map((item: any[], idx: number) => (
        <div key={idx} className="box-current">
          <Copy code={(TestCode as any)[item[0]]} />
          <div className="box-iframe">
            <iframe src={`${iframePath}/#/develop/simulator/${componentName}/demo${idx}`} frameBorder="0" />
          </div>
        </div>
      ))}
      <article>
        <h2 style={{ marginTop: 48 }} id={`${name}-API`}>API</h2>
      </article>
      <div
        style={{
          backgroundColor: '#fff',
          padding: 24,
          marginTop: 8,
          overflowX: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {element(des)}
      </div>
    </div>
  );
};

export default BasePageComponent;
