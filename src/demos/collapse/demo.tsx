import React from 'react';
import { Collapse } from 'union-design-h5';

const { Panel } = Collapse;

const CollapseDemo = () => (
  <div>
    <p style={{ margin: '28px 0px 16px 16px' }}>基本用法</p>
    <Collapse activeKey={1} onChange={(a, b) => { console.log(a, b); }}>
      <Panel header="一级列表样式" key={1}>
        <Collapse activeKey={1} onChange={(a, b) => { console.log(a, b); }}>
          <Panel header="二级列表样式" key={1}>
            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
          </Panel>
        </Collapse>
      </Panel>
      <Panel header="一级列表样式" key={2}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </Panel>
    </Collapse>
    <p style={{ margin: '28px 0px 16px 16px' }}>手风琴模式</p>
    <Collapse activeKey={1} accordion>
      <Panel header="类别(#N)" key={1}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </Panel>
      <Panel header="类别(#N)" key={2}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </Panel>
    </Collapse>
  </div>
);

export default CollapseDemo;
