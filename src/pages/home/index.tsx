/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable global-require */
import React from 'react';
import { Icon } from 'union-design';
import { useHistory } from 'react-router-dom';
import './styles/home.less';
import VideoPage from './video';
import archive from '../../utils/config';

const intruduceList = [
  {
    key: 1,
    src: require('./images/s4.png'),
    title: '理性',
    des: '在复杂中，用理性的思考方式，寻求秩序与美',
  },
  {
    key: 2,
    src: require('./images/s3.png'),
    title: '一致',
    des: '在跨平台上实现多端融合，从功能、用户体验、设计风格等多方面实现一致性',
  },
  {
    key: 3,
    src: require('./images/s2.png'),
    title: '高效',
    des: '通过模块化的方式简化设计与开发流程，做到资源可复用',
  },
  {
    key: 4,
    src: require('./images/s1.png'),
    title: '生长',
    des: '伴随系统生长迭代，作为核心能力为企业赋能，随着企业发展稳健上升',
  },
];

const routerChnage: any = {
  pc: {
    design: `${window.location.origin}/#/design/overview/worth`,
    develop: `${window.location.origin}/#/develop/components/button`,
  },
  mobile: {
    design: `${window.location.origin}/h5/#/design/summary/design`,
    develop: `${window.location.origin}/h5/#/develop/components/button`,
  },
  charts: {
    design: `${window.location.origin}/charts/#/design/line`,
    develop: `${window.location.origin}/charts/#/develop/components/basic-line`,
  },
  vue: {
    design: `${window.location.origin}/vue/#/design/overview/worth`,
    develop: `${window.location.origin}/vue/#/develop/components/button`,
  },
};

const Home = () => {
  const history = useHistory();
  const handleClick = (type: string, key: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (type === 'mobile') {
      key === 'design' && history.push('/design/summary/design');
      key === 'develop' && history.push('/develop/components/button');
      window.location.reload();
    } else {
      window.location.assign(`${routerChnage[type][key]}`);
    }
  };

  return (
    <div className="home">
      <div className="banner">
        <img className="banner-bg" src={require('./images/背景.png')} alt="banner-bg" />
        <div className="banner-containter">
          <div className="banner-right">
            <div className="banner-des1">Uni Design 2022</div>
            <div className="banner-des2">联通设计系统</div>
            <div style={{ marginTop: 22 }} className="banner-des3">先进的企业级数字化协同设计资产</div>
            <div className="banner-des3">高效愉悦的设计开发体验</div>
            <div className="banner-des4">6.30 - 全新发布图表库、Vue2.0</div>
          </div>
          <img alt="" src={require('./images/配图.png')} width="784" className="banner-animation" />
          <img
            alt=""
            src={require('./images/文档板块.png')}
            width="179"
            className="banner-file"
          />
          <img
            alt=""
            src={require('./images/折线图.png')}
            width="114"
            className="banner-line"
          />
          <img
            alt=""
            src={require('./images/中间板块.png')}
            width="354"
            className="banner-middle"
          />
          <img
            alt=""
            src={require('./images/前面板块.png')}
            width="208"
            className="banner-front"
          />
          <img alt="" src={require('./images/圆环1.svg')} className="round" />
          <div className="banner-footer">
            <div className="footer-containter">
              <div>
                <img src={require('./images/horn.png')} alt="" className="horn" />
                <div className="current-header">
                  <div>
                    <div className="title1">中后台</div>
                    <div className="title2">Vue2.0</div>
                  </div>
                  <img src={require('./images/vue.png')} alt="img" />
                </div>
                <div className="current-footer">
                  <div onClick={handleClick('vue', 'design')}>预览</div>
                  <div onClick={handleClick('vue', 'develop')}>使用文档</div>
                </div>
              </div>
              <div>
                <div className="current-header">
                  <div>
                    <div className="title1">中后台</div>
                    <div className="title2">React</div>
                  </div>
                  <img src={require('./images/react.png')} alt="img" />
                </div>
                <div className="current-footer">
                  <div onClick={handleClick('pc', 'design')}>预览</div>
                  <div onClick={handleClick('pc', 'develop')}>使用文档</div>
                </div>
              </div>
              <div>
                <div className="current-header">
                  <div>
                    <div className="title1">中后台</div>
                    <div className="title2">移动端</div>
                  </div>
                  <img src={require('./images/h5.png')} alt="" />
                </div>
                <div className="current-footer">
                  <div onClick={handleClick('mobile', 'design')}>预览</div>
                  <div onClick={handleClick('mobile', 'develop')}>使用文档</div>
                </div>
              </div>
              <div>
                <div className="current-header">
                  <img src={require('./images/horn.png')} alt="" className="horn" />
                  <div>
                    <div className="title1">中后台</div>
                    <div className="title2">图表库</div>
                  </div>
                  <img src={require('./images/charts.png')} alt="" />
                </div>
                <div className="current-footer">
                  <div onClick={handleClick('charts', 'design')}>预览</div>
                  <div onClick={handleClick('charts', 'develop')}>使用文档</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="intruduce">
          {intruduceList.map((item: any) => (
            <div className="current-intruduce" key={item.key}>
              <img src={item.src} alt="1" />
              <div className="current-title">{item.title}</div>
              <div className="current-des">{item.des}</div>
            </div>
          ))}
        </div>
        <div className="video">
          <div className="current-video">
            <div className="current-left">
              <div className="left-title">Web端组件库</div>
              <div className="left-line" />
              <div className="left-des">
                Uni Design在2021年的第一周，全新发布UniD管理域web端系统规范设计文档。
                <div style={{ marginTop: '18px' }}>作为企业数字化设计的倡导者，UniD打破传统行业B端设计的固有思维模式，积极研发集产品、UIUX、前端开发于一体的数字化设计体系，让产品更专注于业务，让企业用户获得更快更流畅的系统使用体验，助力联通管理域系统快速数字化转型。</div>
              </div>
              <div className="left-details" onClick={() => window.location.assign(`${routerChnage.pc.design}`)}>
                查看详情
                <Icon
                  type="right"
                  style={{
                    verticalAlign: 'middle', fontSize: '16px', marginLeft: '12px', marginTop: '-1px',
                  }}
                />
              </div>
            </div>
            <VideoPage
              videoId="video2"
              poster={require('./images/v1.png')}
              videoSrc={`${archive.url}/videos/pc.mp4`}
              imgSrc={require('./images/video-bg1.png')}
            />
          </div>
          <div className="current-video" style={{ marginTop: '107px' }}>
            <div className="current-left">
              <div className="left-title">移动端组件库</div>
              <div className="left-line" />
              <div className="left-des">
                Uni Design设计团队本次隆重推出的移动端组件库均由企业内部移动端门户“随沃行”所用到的组件提炼而来。
                <div style={{ marginTop: '10px' }}>当内部系统服务于全企业用户时，UIUX设计品质会是最先触达到用户的，设计品质将成为产品的差异化竞争力。</div>
                <div style={{ marginTop: '10px' }}>Uni Design设计团队，希望通过细腻的交互体验、丰富的界面细节，改变企业现有移动端简单枯燥的设计现状，赋予移动端 生长、舒适、低密度 的移动端视觉设计原则。</div>
              </div>
              <div className="left-details" onClick={() => window.location.assign(`${routerChnage.mobile.design}`)}>
                查看详情
                <Icon
                  type="right"
                  style={{
                    verticalAlign: 'middle', fontSize: '16px', marginLeft: '12px', marginTop: '-1px',
                  }}
                />
              </div>
            </div>
            <VideoPage
              videoId="video1"
              poster={require('./images/v2.png')}
              videoSrc={`${archive.url}/videos/h5.mp4`}
              imgSrc={require('./images/video-bg2.png')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
