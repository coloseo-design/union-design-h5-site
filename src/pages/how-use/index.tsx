/* eslint-disable no-template-curly-in-string */
import React from 'react';
import ReactHight from 'highlight-for-react';
import Anchor from '../../components/anchor';

const spanS = {
  display: 'inline-block',
  backgroundColor: '#f2f4f5',
  padding: '2px 6px',
  margin: '0px 4px',
};

const HowUse = () => (
  <div style={{ textAlign: 'justify' }}>
    <h2 id="agent">设置代理</h2>
    <p>在项目里的.npmrc里设置。</p>
    <ReactHight>registry=http://ccp.tianti.tg.unicom.local/artifactory/api/npm/sjxt-npm-virtual/</ReactHight>
    <p style={{ margin: '12px 0px' }}>在.yarnrc</p>
    <ReactHight>registry &quot;http://ccp.tianti.tg.unicom.local/artifactory/api/npm/sjxt-npm-virtual/&quot;</ReactHight>
    <h2 style={{ marginTop: 32 }} id="install">安装</h2>
    <h3>使用 npm 或 yarn 安装</h3>
    <p>我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>
    <ReactHight>$ npm install union-design-h5 --save</ReactHight>
    <ReactHight>$ yarn add union-design-h5 </ReactHight>
    <h2 style={{ marginTop: 32 }} id="browser">浏览器支持</h2>
    <li>IOS</li>
    <li>Android</li>
    <h2 style={{ marginTop: 32 }} id="ts">TypeScript</h2>
    <p>
      <span
        style={spanS}
      >
        union-design-h5
      </span>
      使用 TypeScript 进行书写并提供了完整的定义文件。（不要引用
      <span
        style={spanS}
      >
        @types/union-design-h5
      </span>
      ）。
    </p>
    <h2 style={{ marginTop: 32 }} id="plugin">按需加载</h2>
    <p>
      <span style={spanS}>union-design-h5</span>
      默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入
      <span style={spanS}>{'import { Button } from \'union-design-h5\''}</span>
      就会有按需加载的效果。
    </p>
    <p style={{ marginTop: 12 }}>按需加载css需要在webpak.config.js文件中配置。</p>
    <ReactHight>{'[\'import\', { libraryName: \'union-design-h5\', libraryDirectory: \'lib\', style: (name) => `${name}/styles/css` }, \'uni\']'}</ReactHight>
    <h2 style={{ marginTop: 32 }} id="demo">示例</h2>
    <ReactHight>
      {`
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { Button, DatePicker } from 'union-design-h5';
        
        ReactDOM.render(
          <div className="App">
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
              Primary Button
            </Button>
          </div>,
          document.getElementById("root")
        );
        `}
    </ReactHight>
    <Anchor
      dirs={[
        {
          id: 'agent',
          name: '设置代理',
        },
        {
          id: 'install',
          name: '安装',
        },
        {
          id: 'browser',
          name: '浏览器支持',
        },
        {
          id: 'ts',
          name: 'TypeScript',
        },
        {
          id: 'plugin',
          name: '按需加载',
        },
        {
          id: 'demo',
          name: '示例',
        },
      ]}
    />
  </div>
);

export default HowUse;
