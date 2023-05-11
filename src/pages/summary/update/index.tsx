/* eslint-disable global-require */
import React from 'react';
import Anchor from '../../../components/anchor';
import './index.less';

const Example = () => (
  <div className="example">
    <div className="title">更新说明</div>
    <div className="content-example">
      <Anchor dirs={[{ name: '更新说明', id: '1' }]} />
      <div className="left">
        <div className="circle" />
        <div className="line" />
        <div className="circle" style={{ position: 'absolute', top: 254 }} />
        <div className="line" style={{ top: '263px', height: 143 }} />
      </div>
      <div className="right">
        <div className="current">
          <div>
            <span className="t1">当前版本：</span>
            <span className="t2">
              2022.V1.0
              <span style={{ paddingLeft: 24 }}>2022年6月发布</span>
            </span>
          </div>
          <ul>
            <li>本规范为2022- V1.0 管理域系统UIUX设计规范文档。</li>
            <li>该文档中涉及到的全部设计样式、典型模版页面，请结合设计系统Axure/Sketch文件使用，如需要，请联系设计系统项目组。</li>
            <li>本文档中涉及到的组件库于2022.06发布设计系统前端组件库，服务并支撑各项目组。</li>
            <li>本规范自发布之日起，设计团队提供设计运营与支撑工作，项目组可联系设计系统团队进行设计对接。</li>
            <li>设计系统项目组支撑邮箱：hqs-UniDesign@chinaunicom.cn。</li>
          </ul>
        </div>
        <div className="current" style={{ marginTop: '35px' }}>
          <div>
            <span className="t1">第一个版本：</span>
            <span className="t2">
              2021.V1.0
              <span style={{ paddingLeft: 24 }}>2021年6月发布</span>
            </span>
          </div>
          <ul>
            <li>本规范为2021- V1.0 M域管理系统UIUX设计规范文档。</li>
            <li>该文档中涉及到的全部设计样式、典型模版页面，请结合设计系统Axure/Sketch文件使用，如需要，请联系设计系统项目组。</li>
            <li>本文档中涉及到的组件库于2021.06发布设计系统前端组件库，服务并支撑各项目组。</li>
            <li> 本规范自发布之日起，设计团队提供设计运营与支撑工作，项目组可联系设计系统团队进行设计对接。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Example;
