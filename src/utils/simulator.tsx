/* eslint-disable react/prop-types */
import React from 'react';
import * as TestDemo from '../allDemos';
import * as TestCode from '../codes';
import { rename } from './fun';

export interface PageProps {
  name: string;
  demo?: string;
}

const Simulator: React.FC<PageProps> = (props) => {
  const { name, demo } = props;
  const componentName: string = rename(name);
  const tem = demo?.slice(4);
  const t = Number(tem) === 0 ? `${componentName}Demo` : `${componentName}Demo${tem}`;
  const CurrentComponent = Object.entries((TestDemo)).filter((i) => i[0] === t);

  const currentCode = (TestCode as any)[t] || '';
  const start = '// start';
  const startIndex = currentCode.indexOf(start);
  const endIndex = currentCode.indexOf('// end');
  const title = startIndex > -1 && endIndex > -1 ? currentCode.slice(startIndex + start.length + 1, endIndex) : '';
  return (
    <div className="box">
      <div className="box-title">
        {title || name}
      </div>
      {(CurrentComponent || []).map((item) => (
        <div key={item[0]}>
          {React.createElement(item[1], {}, null)}
        </div>
      ))}
    </div>
  );
};

export default Simulator;
