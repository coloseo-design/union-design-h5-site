/* eslint-disable no-lonely-if */
/* eslint-disable global-require */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BackTop } from 'union-design';
import './layout.less';
import Menus, { Menu } from './menus';
// import Anchor from '../components/anchor';
import Search from './search';

const logo = require('../assets/images/logo.png');
const dropdown = require('../assets/images/dropdown.png');

interface LayoutProps {
  menus: {
    develop: Menu[];
    design: Menu[];
  };
}

interface RouteLinked {
  path: string;
  title: string;
  subTitle: string;
  themeColor: string;
  pre?: RouteLinked;
  next?: RouteLinked;
}

function linkedMenus(menus: Menu[] = [], target: string): RouteLinked[] {
  let pre: any = {
    path: '/',
    title: '',
    subTitle: '首页',
    themeColor: '#D1373D',
  };
  const routes: RouteLinked[] = [pre];
  menus.forEach((item: Menu) => {
    item.children?.forEach((sub) => {
      const element = {
        path: `/${target}/${item.key}/${sub.key}`,
        title: item.title,
        subTitle: sub.title,
        themeColor: sub.themeColor || item.themeColor || '',
      };
      if (pre) {
        Object.assign(element, {
          pre,
        });
        Object.assign(pre, {
          next: element,
        });
      }
      pre = element;
      routes.push(element);
    });
  });
  return routes;
}

function getCurrentRoute(menus: RouteLinked[], path: string): RouteLinked | undefined {
  const current = menus.find((item) => item.path === path);
  return current;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, menus: _menus } = props;
  const history = useHistory();
  const location = useLocation();

  const { pathname } = history.location;

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const [target, setTarget] = useState<'design' | 'develop'>(history.location.pathname.indexOf('/develop/components') >= 0 ? 'develop' : 'design');
  // const [allId, setAllId] = useState([]);
  const menus = _menus[target];
  const linkedRoutes = useMemo(() => linkedMenus(menus, target), [target]);

  const [routeConfig, setRouteConfig] = useState<RouteLinked>(getCurrentRoute(linkedRoutes, history.location.pathname) || linkedRoutes[0]);

  useEffect(() => {
    history.listen((location) => {
      if (location.pathname) {
        const gBody = document.getElementsByClassName('g-body')[0];
        const current = getCurrentRoute(linkedRoutes, location.pathname);
        if (history.action === 'PUSH') {
          if (location.pathname === '/' || location.pathname === '/download') {
            document.documentElement.scrollTop = 0;
          } else if (gBody) {
            gBody.scrollTop = 0;
          }
        }
        if (current) {
          setRouteConfig(current);
          // 导航切换页面需要刷新到当前页面顶部
          const [_, anchor_str] = location.hash.split('#');
          if (anchor_str) {
            setTimeout(() => {
              document.getElementById(anchor_str)?.scrollIntoView(true);
            }, 300);
          }
        }
      }
    });
    // const id = [...document.querySelectorAll('*')].filter((item) => item.getAttribute('id'));
    // const newId = id.filter((i) => i.id !== 'root' && i.localName !== 'h1' && ['h2', 'h3', 'h4', 'h5', 'h6'].includes(i.localName));
    // setAllId(newId);
    document.documentElement.style.setProperty('--title-color', routeConfig.themeColor);
    setTarget(history.location.pathname.indexOf('/develop/components') >= 0 ? 'develop' : 'design');
  }, [routeConfig, target, history.location.pathname]);

  const navigateToNext = useCallback(() => {
    routeConfig.next && history.push(routeConfig.next?.path);
  }, [routeConfig]);

  const navigateToPrev = useCallback(() => {
    routeConfig.pre && history.push(routeConfig.pre?.path);
  }, [routeConfig]);

  const handleWeb = (key: string) => (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault();
    if (key === 'download') {
      // history.push('/download');
      window.location.assign(`${window.location.origin}/#/download`);
      setRouteConfig({
        path: '/download',
        subTitle: '资源下载',
        themeColor: '#D1373D',
        title: '',
      });
      setTarget('design');
    } else {
      window.location.assign(`${window.location.origin}/#/design/overview/worth`);
    }
  };

  // const dirs = allId.map((i) => ({
  //   id: i.id,
  //   name: i.innerText,
  // }));
  const handleHome = () => {
    setTarget('design');
    setRouteConfig({
      path: '/',
      subTitle: 'title',
      themeColor: '#D1373D',
      title: '',
    });
    // history.push('/');

    // 改成跳到公共首页
    window.location.assign(`${window.location.origin}/#/`);
  };
  const handleH5 = (from: any) => {
    setTarget('design');
    if (from) {
      history.push(`/design/summary/design?from=${from}`);
    } else {
      history.push('/design/summary/design');
    }
  };
  const bodyBackground = () => {
    let b = '#fff';
    if (history.location.pathname.indexOf('design') >= 0) {
      b = '#fafafa';
    }
    if (history.location.pathname.indexOf('develop') >= 0 || history.location.pathname === '/download') {
      b = '#fafafa';
    }
    return b;
  };

  const handleChange = (key: 'design' | 'develop') => (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    setTarget(key);
    if (key === 'design') {
      setRouteConfig({
        path: '/design/summary/design',
        subTitle: '设计价值观',
        themeColor: '#D1373D',
        title: '',
      });
      history.push('/design/summary/design');
    } else {
      // 如果是Vue跳转过来再点击开发者，就跳回到Vue的开发者
      if (location?.search) {
        window.location.assign(`${window.location.origin}/h5-vue/#/develop/components/button`);
      } else {
        setRouteConfig({
          path: '/develop/components/button',
          subTitle: 'button',
          themeColor: '#D1373D',
          title: '',
        });
        history.push('/develop/components/button');
      }
    }
  };

  return (
    <div className="g-layout" onClick={() => { setShow(false); setVisible(false); }}>
      {/* {target === 'develop' && history.location.pathname.indexOf() && <Anchor dirs={dirs} />} */}
      <div className="g-header">
        <div className="header">
          <div>
            <img className="logo" src={logo} alt="" style={{ cursor: 'pointer' }} onClick={handleHome} />
            {/* <div className="header-title" onClick={handleHome}>联通设计系统</div> */}
            <div className="search-box-v2">
              <img src={require('../assets/images/search.png')} alt="serch" width="23" />
              <Search changeTarget={setTarget} />
            </div>
          </div>
          <div className="header-right">
            <div onClick={handleHome}><span>首页</span></div>
            {/* <div onClick={handleH5} style={{ color: pathname.startsWith('/develop/components/') || pathname.startsWith('/design') ? '#b30000' : 'rgba(0, 0, 0, 0.85)' }}><span>移动端组件库</span></div> */}
            <div
              className="web-parent"
              style={{ position: 'relative' }}
              onClick={(e) => { e.stopPropagation(); setVisible(!visible); }}
            >
              <span style={{ color: '#b30000' }}><span>移动端组件库</span></span>
              <img src={dropdown} alt="" width={16} height={16} />
              <div
                className="web-child-wrap"
                style={{
                  display: visible ? 'flex' : 'none', position: 'absolute', width: 120, height: 88, border: '1px solid #D8D8D8', flexWrap: 'wrap', paddingLeft: 16, paddingBottom: 16, alignItems: 'flex-end', background: '#fff', top: 27, left: '-8px',
                }}
              >
                <div onClick={handleH5.bind(null, '')} className="child">React组件库</div>
                <div className="child" onClick={handleH5.bind(null, 'vue')}>Vue2.0组件库</div>
              </div>
            </div>
            {/* <div onClick={handleWeb('worth')}>Web端组件库</div> */}
            <div
              className="web-parent"
              style={{ position: 'relative' }}
              onClick={(e) => { e.stopPropagation(); setShow(!show); }}
            >
              <span><span>Web端组件库</span></span>
              <img src={dropdown} alt="" width={16} height={16} />
              <div
                className="web-child-wrap"
                style={{
                  display: show ? 'flex' : 'none', position: 'absolute', width: 120, height: 88, border: '1px solid #D8D8D8', flexWrap: 'wrap', paddingLeft: 16, paddingBottom: 16, alignItems: 'flex-end', background: '#fff', top: 27, left: '-8px',
                }}
              >
                <div onClick={handleWeb('worth')} className="child">React组件库</div>
                <div className="child" onClick={() => { window.location.assign(`${window.location.origin}/vue/#/design/overview/worth`); }}>Vue2.0组件库</div>
              </div>
            </div>
            <div onClick={() => { window.location.assign(`${window.location.origin}/charts/#/design/line`); }}><span>图表库</span></div>
            <div onClick={handleWeb('download')}><span>资源与下载</span></div>
            <div className="header-avatar">
              <span>欢迎您</span>
            </div>
          </div>
        </div>
        {/* <div style={{ height: 5, backgroundColor: routeConfig.themeColor || '#D1373D' }} /> */}
      </div>
      <div
        className="g-content"
        style={{
          paddingLeft: (history.location.pathname !== '/' && history.location.pathname !== '/download') ? 240 : 0,
          backgroundColor: history.location.pathname !== '/' ? '#fafafa' : '#f0f2f5',
        }}
      >
        {history.location.pathname !== '/' && history.location.pathname !== '/download' && (
          <div className="g-left">
            <div className="g-left-title">{location?.search ? 'Vue2.0组件库' : 'React组件库'}</div>
            <div className="g-switch">
              <ul className="switch">
                <li className={`${target === 'design' ? 'active' : ''}`} onClick={handleChange('design')}>设计师</li>
                <li className={`${target === 'develop' ? 'active' : ''}`} onClick={handleChange('develop')}>开发者</li>
              </ul>
            </div>
            <Menus menus={menus} target={target} routeConfig={routeConfig} />
          </div>
        )}
        <div
          className="g-body"
          id="g-body1"
          style={{
            padding: (history.location.pathname === '/' || history.location.pathname === '/download')
              ? 0
              : history.location.pathname.indexOf('develop/components') >= 0 && history.location.pathname.indexOf('how-use') === -1
                ? '48px 60px'
                : '56px 180px 96px 60px',
            backgroundColor: bodyBackground(),
            height: history.location.pathname !== '/' && history.location.pathname !== '/download' ? 'calc(100vh - 64px)' : 'auto',
            overflow: history.location.pathname !== '/' && history.location.pathname !== '/download' ? 'auto' : undefined,
          }}
        >
          {children}
        </div>

        {history.location.pathname === '/' && (
        <footer className="home-footer">
          <div className="footer1">
            <img alt="" src={require('../assets/images/footer-email.png')} style={{ width: '16px', marginRight: '5px', marginTop: '-3px' }} />
            联系我们：hqs-UniDesign@chinaunicom.cn
          </div>
          <div className="footer2">- Made with ❤️  中国联合网络通信集团有限公司 -</div>
        </footer>
        )}
      </div>
      {(pathname === '/' || pathname === '/download') && <BackTop style={{ right: 20, bottom: 90 }} />}
      {pathname !== '/' && pathname !== '/download' && <BackTop target={() => document.getElementsByClassName('g-body')[0]} style={{ right: 20, bottom: 90 }} />}
    </div>
  );
};

export default Layout;
