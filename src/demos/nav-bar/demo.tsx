import React from 'react';
import {
  NavBar, Avatar, Icon,
} from 'union-design-h5';

const NavDemo = () => (
  <div>
    <p style={{ margin: '28px 0px 16px 16px' }}>大标题导航</p>
    <NavBar
      icon={<Avatar size={32} text="姓名" />}
      title="用户姓名"
      rightText={(
        <div>
          <Icon type="apps" style={{ fontSize: 24, marginLeft: 8 }} />
          <Icon type="bell-outline" style={{ fontSize: 24, marginLeft: 8 }} />
          <Icon type="search" style={{ fontSize: 24, marginLeft: 8 }} />
        </div>
        )}
      typeSize="lg"
    />
    <p style={{ margin: '28px 0px 16px 16px' }}>自定义左右按钮标题导航</p>
    <NavBar
      leftArrow
      leftText="返回"
      icon={<Icon type="loading" />}
      title="标题"
      rightText="取消"
      style={{ marginBottom: 32 }}
      onRightClick={() => { console.log('111right'); }}
    />
    <p style={{ margin: '28px 0px 16px 16px' }}>自定义右按钮颜色标题导航</p>
    <NavBar
      leftArrow
      leftText="返回"
      title="标题"
      rightText="全选"
      rightTextColor="#F31D39"
    />
    <p style={{ margin: '28px 0px 16px 16px' }}>标题超出样式导航</p>
    <NavBar
      leftArrow
      leftText="返回"
      title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
      rightText={<Icon style={{ fontSize: 16 }} type="more" />}
    />
    <p style={{ margin: '28px 0px 16px 16px' }}>一级栏目标题</p>
    <NavBar
      title="栏目标题"
      style={{ marginBottom: 32 }}
    />
    <p style={{ margin: '28px 0px 16px 16px' }}>二级栏目标题</p>
    <NavBar
      title="栏目标题"
      icon={(
        <div style={{
          width: 16, height: 16, backgroundColor: '#C8CCCC', borderRadius: 3,
        }}
        />
        )}
      typeSize="sm"
    />
    <p style={{ margin: '28px 0px 16px 16px' }}>展示后置标题导航</p>
    <NavBar
      title="栏目标题"
      icon={(
        <div style={{
          width: 16, height: 16, backgroundColor: '#C8CCCC', borderRadius: 3,
        }}
        />
        )}
      showBackTitle
      typeSize="xs"
    />
    <p style={{ margin: '28px 0px 16px 16px' }}>展示home</p>
    <NavBar home />
  </div>
);

export default NavDemo;
