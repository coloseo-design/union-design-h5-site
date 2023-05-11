/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useMemo } from 'react';
import classname from 'classnames';
import { Icon } from 'union-design';
import { useHistory } from 'react-router-dom';

export interface Menu {
  title: string;
  key: string;
  themeColor?: string;
  children?: Menu[];
}

interface MenuFCProps {
  menus: Menu[];
  routeConfig: object,
  target: 'develop' | 'design';
}

const Menus: React.FC<MenuFCProps> = (props) => {
  const { menus, routeConfig, target } = props;
  const subMenusCls = classname('sub-menu-box', {
    'sub-menu-open': false,
  });
  const menuCls = classname('menu-box');

  const toggleMenus = useCallback((evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = (evt.target as HTMLElement).nextSibling as HTMLElement;
    const cls = target.getAttribute('class') || '';
    const clsList = cls.split(' ');
    const index = clsList.indexOf('sub-menu-open');
    if (index === -1) {
      clsList.push('sub-menu-open');
    } else {
      clsList.splice(index, 1);
    }
    target.setAttribute('class', clsList.join(' '));
  }, []);
  const history = useHistory();
  const onRouteChange = useCallback((key, subKey) => () => {
    history.push(`/${target}/${key}/${subKey}`);
  }, [target]);

  const menuNodes = useMemo(() => menus.map((item) => (
    <div className={menuCls} key={item.title}>
      <div className="menu" onClick={item.key === 'how-use' ? onRouteChange('components', 'how-use') : toggleMenus} style={{ padding: '0px 30px' }}>
        <div className="title">
          {item.title}
        </div>
        {item.children && item.children.length > 0 && (
        <div className="icon">
          <Icon type="down" />
        </div>
        )}
      </div>
      <div className={subMenusCls}>
        {
              (item.children || []).map((sub) => {
                const selected = routeConfig.path === `/${target}/${item.key}/${sub.key}`;
                const color = selected ? `${routeConfig.themeColor}` : 'rgba(0, 0, 0, 0.85)';
                return (
                  <div className="menu" key={sub.title} style={{ padding: '0px 30px 0px 45px' }} onClick={onRouteChange(item.key, sub.key)}>
                    <div style={{ color }} className="title">
                      {sub.title}
                    </div>
                  </div>
                );
              })
            }
      </div>
    </div>
  )), [menus, menuCls, routeConfig]);
  return (
    <div className="g-menus">
      {
        menuNodes
      }
    </div>
  );
};

export default Menus;
