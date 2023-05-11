/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */

import React from 'react';
import './download.less';
import archive from '../../utils/config';

const d1 = require('./images/1@2x.png');
const d2 = require('./images/2@2x.png');
const d3 = require('./images/3@2x.png');
const d4 = require('./images/4@2x.png');
const d5 = require('./images/5@2x.png');
const d6 = require('./images/6@2x.png');
const d7 = require('./images/7@2x.png');
const d8 = require('./images/8@2x.png');
const d9 = require('./images/9@2x.png');
const d10 = require('./images/10@2x.png');
const d11 = require('./images/11@2x.png');
const d12 = require('./images/12@2x.png');
const d13 = require('./images/13@2x.png');

export interface mapp {
  [x: string]: { url: string, size: string };
}

// const prefix = `${window.location.origin}/archive`;
const prefix = archive.url;

const loadMap: mapp = {
  1: { url: `${prefix}/resource/pc/web端UIUX设计规范文档2022V1.0.pdf`, size: '69.2M' },
  2: { url: `${prefix}/resource/pc/web端UIUX设计规范文档2022V1.0评分标准.pdf`, size: '69.4M' },
  3: { url: `${prefix}/resource/pc/Web端Sketch组件库2022-V1.0.sketch`, size: '66.57M' },
  4: { url: `${prefix}/resource/pc/Web端Axure部件库V1.0.rplib`, size: '86.0M' },
  5: { url: `${prefix}/resource/pc/Web端Adobe XD组件库V1.0.xd`, size: '65.6M' },
  6: { url: `${prefix}/resource/pc/移动端UIUX设计规范文档2022 V1.0.pdf`, size: '4.3M' },
  7: { url: `${prefix}/resource/pc/移动端UIUX设计规范文档2022 V1.0评分标准.pdf`, size: '4.5M' },
  8: { url: `${prefix}/resource/h5/移动端Sketch组件库V1.0.sketch`, size: '2.0M' },
  9: { url: `${prefix}/resource/h5/移动端Axure部件库V1.0.rplib`, size: '2.3M' },
  10: { url: `${prefix}/resource/h5/移动端Adobe XD组件库V1.0.xd`, size: '8.7M' },
  11: { url: `${prefix}/resource/pc/Uni charts图表组件库.sketch`, size: '671KB' },
  12: { url: `${prefix}/resource/pc/图表库UIUX设计规范文档2022 V1.0.pdf`, size: '' },
  13: { url: `${prefix}/resource/pc/数据可视化资源2022V1.0版.sketch`, size: '' },
};

const pdf = ['1', '2', '6', '7'];
const handleDownload = (key: number) => (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
  e.preventDefault();
  window.open(`${loadMap[key].url}`, pdf.indexOf(key) >= 0 ? '_blank' : '_self');
};

const CurrentDiv = (imgsrc: string, title: string, des: string[] = [], Mapkey: number[], horn?: string | false, flag?: boolean) => (
  <div className="current" style={{ visibility: flag ? 'hidden' : 'visible' }}>
    {horn && <img src={horn} alt="" className="horn" />}
    <img className="header-bg" src={imgsrc} alt="" />
    <div className="current-footer">
      <div className="footer-title">{title}</div>
      {des.map((item, index) => (
        <div key={item} className={`footer-des ${item === '建设中，即将发布…' ? 'footer-hover' : ''}`} onClick={Mapkey[index] !== 0 ? handleDownload(Mapkey[index]) : undefined}>
          {item}
          {item !== '建设中，即将发布…' && <img src={require('./images/download@2x.png')} alt="download" />}
        </div>
      ))}
    </div>
  </div>
);

const Download = () => (
  <div className="download-source">
    <div className="download-header">
      <div className="load-header">资源与下载</div>
      <div className="load-desc">
        <div>为了更好的传播与应用，我们在这里汇总了与联通设计系统（Uni Design）相关的所有资源，并提供相关设计资源和设计组件库的下载，更多设计资源正在整理和完善中。</div>
        <div>在设计系统的构建与建设过程中我们也进行了大量的文献与调研，吸取了众多前人的经验与知识，并结合中国联通的业务特点进行了内容的整合与优化。</div>
        <div> 我们希望通过理论与实践的统一将联通设计系统（Uni Design）打造成具有联通特色的设计系统，为用户、设计者和开发者带来不一样的体验。</div>
      </div>
    </div>
    <div className="download-section">
      <div className="section1">
        <div className="section-content">
          <div className="title">UI/UX设计规范文档</div>
          <div className="containter">
            {CurrentDiv(d1, 'Web端UI/UX规范文档', ['Web端设计规范(2022V1.0).pdf - 36.8M', 'Web端评分管理标准(2022V1.0).pdf - 37.1M'], [1, 2], require('./images/d1.png'))}
            {CurrentDiv(d2, '移动端UI/UX规范文档', ['移动端设计规范(2022V1.0).pdf - 30.8M', '移动端评分管理标准(2022V1.0).pdf - 31M'], [6, 7], require('./images/d2.png'))}
            {CurrentDiv(d3, '图表设计规范文档', ['图表设计规范(2022V1.0).pdf - 4.9M'], [12], require('./images/d3.png'))}
          </div>
        </div>
        <div className="section-content">
          <div className="title">Web端资源包</div>
          <div className="containter">
            {CurrentDiv(d4, 'Web端Sketch组件库', ['Sketch组件库(2022V1.0).sketch - 69.5M'], [3])}
            {CurrentDiv(d5, 'Web端Axure部件库', ['Axure部件库(V1.0).rplib - 90.2M'], [4])}
            {CurrentDiv(d6, 'Web端Adobe XD组件库', ['Adobe XD组件库(V1.0).xd - 68.6M'], [5])}
          </div>
        </div>
        <div className="section-content">
          <div className="title">移动端资源包</div>
          <div className="containter">
            {CurrentDiv(d7, '移动端Sketch组件库', ['Sketch组件库(V1.0).sketch - 2.0M'], [8])}
            {CurrentDiv(d8, '移动端Axure部件库', ['Axure部件库(V1.0).rplib - 2.3M'], [9])}
            {CurrentDiv(d9, '移动端Adobe XD组件库', ['Adobe XD组件库(V1.0).xd - 8.7M'], [10])}
          </div>
        </div>
        <div className="section-content">
          <div className="title">可视化及图表资源包</div>
          <div className="containter">
            {CurrentDiv(d10, 'Uni charts图表组件库', ['图表组件库(2022V1.0).sketch - 671.0KB'], [11], require('./images/d2.png'))}
            {CurrentDiv(d11, '数据可视化组件', ['可视化组件库(2022V1.0).sketch - 117M'], [13], require('./images/d4.png'))}
            {CurrentDiv('', '', [''], [], false, true)}
          </div>
        </div>
        <div className="section-content">
          <div className="title">更多资源</div>
          <div className="containter">
            {CurrentDiv(d12, 'Uni icon图标库', ['建设中，即将发布…'], [0])}
            {CurrentDiv(d13, 'Uni 插画库', ['建设中，即将发布…'], [0])}
            {CurrentDiv('', '', [''], [], false, true)}
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="section-title">致敬</div>
        <div className="section2-containter">
          <div className="sec2-current">
            <img src={require('./images/file1.png')} alt="" />
            <div className="file-title">About Face 4</div>
            <div className="file-des">《About Face 4: 交互设计精髓》是一本数字产品和系统的交互设计指南，全面系统地讲述了交互设计的过程、原理和方法，涉及的产品和系统有个人计算机上的个人和商务软件、Web 应用、手持设备、信息亭、数字医疗系统、数字工业系统等。</div>
          </div>
          <div className="sec2-current">
            <img src={require('./images/file2.png')} alt="" />
            <div className="file-title">Web界面设计</div>
            <div className="file-des">本书涵盖了在基于独一无二的Web环境下、在创建丰富体验的过程中设计Web界面的最佳实践、模式和原理。向读者展示了超过75种基于富交互构建Web界面的模式，并以简单明了的语言，阐明了数以百计行之有效的最佳实践。</div>
          </div>
          <div className="sec2-current">
            <img src={require('./images/file3.png')} alt="" />
            <div className="file-title">设计心理学</div>
            <div className="file-des">设计心理学是把人们心理状态，尤其是人们对于需求的心理通过意识作用于设计的一门学问。它同时研究人们在设计创造过程中的心态。以及设计对社会及对社会个体所产生的心理反应，反过来在作用于设计，使设计更能够反映和满足人们的心理作用。</div>
          </div>
          <div className="sec2-current">
            <img src={require('./images/file4.png')} alt="" />
            <div className="file-title">写给大家看的设计书</div>
            <div className="file-des">《写给大家看的设计书》中凝炼为亲密性、对齐、重复和对比4个基本原则。作者以其简洁明快的风格，将优秀设计所必须遵循的这4个基本原则及其背后的原理通俗易懂地展现在读者面前。</div>
          </div>
        </div>
        <div className="section2-containter" style={{ marginTop: 54 }}>
          <div className="sec2-current">
            <img src={require('./images/file5.png')} alt="" />
            <div className="file-title">设计体系</div>
            <div className="file-des">本书主要介绍如何帮助中小型产品团队尽快打造一套新型、实用的设计体系。本书分为两个部分。第一部分讨论设计体系的基础——模式与实践。第二部分侧重于阐释建立和维护设计体系的实际步骤和实用技术。</div>
          </div>
          <div className="sec2-current">
            <img src={require('./images/file6.png')} alt="" />
            <div className="file-title">字型散步</div>
            <div className="file-des">《一本以台湾生活议题为中心的中文字型专书，以城市街道的文字风景，揭开字型设计的秘密。</div>
          </div>
          <div className="sec2-current">
            <img src={require('./images/file7.png')} alt="" />
            <div className="file-title">设计的觉醒</div>
            <div className="file-des">该书介绍了日本设计崛起的时代热风、“无印良品”品牌概念的诞生、年轻设计师职业敏感的养成、著名品牌背后的设计故事。 停下手中的忙碌回头思考，觉醒的，也许不止是设计。</div>
          </div>
          <div className="sec2-current">
            <img src={require('./images/file8.png')} alt="" />
            <div className="file-title">匠心体验</div>
            <div className="file-des">本书详细剖析了移动终端服务的用户体验设计要点，阐述了营造舒适的感官体验、甄选内容及功能、提高用户效率、优化等待时间、合理实施教学、情感设计等方面的设计诀窍，并通过大量实例，呈现当今移动终端服务设计中的亮点与雷区。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Download;
