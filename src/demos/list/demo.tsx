import React from 'react';
import { List, Button, Icon } from 'union-design-h5';

const listDemo = () => {
  const { Item } = List;
  const data = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      subtitle: 'Vice Chairman',
    },
    {
      name: '列表名称',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      subtitle: '所属公司',
    },
    {
      name: '列表名称1',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      subtitle: '公司名称',
    },
  ];
  const data1 = [
    {
      name: '姓名',
      job: '总经理',
      phone: '1525252622',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      company: '所属公司名称',
    },
    {
      name: '姓名',
      job: '总经理',
      phone: '1525252622',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      company: '所属公司名称',
    },
    {
      name: '姓名',
      job: '总经理',
      phone: '1525252622',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      company: '所属公司名称',
    },
    {
      name: '姓名',
      job: '总经理',
      phone: '1525252622',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      company: '所属公司名称',
    },
  ];
  const data2 = [
    {
      title: '评论内评论内容评论内容评内评论内容评论内容评论',
      subtitle: '公文-云公文 2021/02/8',
      name: '姓名-公司名称',
      extra:
  <div>
    <img
      width={186}
      alt="logo"
      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
    />
  </div>
      ,
    },
    {
      title: '论内评论内容评论内容评论内容评论内',
      subtitle: '公文-云公文 2021/02/8',
      name: '姓名-公司名称',
      extra:
  <div>
    <img
      width={186}
      alt="logo"
      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
    />
  </div>,
    },
  ];
  const data3 = [
    {
      title: '这里是新闻内容，长文可以折',
      time: 'yyyy.mm.dd 00:00',
      source: '通知来源',
      subtitle: '一级信息',
      extra: (
        <div
          style={{
            width: 120, height: 88, background: '#C8CCCC', marginLeft: 12, borderRadius: 6,
          }}
        />
      ),
    },
    {
      title: '这里是新闻内容，长文可以折',
      time: 'yyyy.mm.dd 00:00',
      source: '通知来源',
      subtitle: '一级信息',
      extra: (
        <div
          style={{
            width: 120, height: 88, background: '#C8CCCC', marginLeft: 12, borderRadius: 6,
          }}
        />
      ),
    },
  ];
  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>基础列表</p>
      <List
        dataSource={data}
        itemLayout="vertical"
        renderItem={(item, index) => (
          <Item
            arrow={index === data.length - 1 ? <Button size="small">按钮</Button> : 'arrow'}
            onIconClick={() => { console.log('----'); }}
          >
            <Item.Content>
              <Item.Title>标题名称</Item.Title>
              <Item.SubTitle style={{ marginTop: 2 }}>信息内容</Item.SubTitle>
            </Item.Content>
          </Item>
        )}
      />
      <div>
        <p style={{ margin: '28px 0px 16px 16px' }}>应用列表</p>
        <List
          dataSource={data}
          renderItem={(item) => (
            <Item>
              <Item.Avatar size={48} shape="square" style={{ background: 'linear-gradient(135deg, #5498FD 0%, #3C81F0 100%)' }}>
                <Icon style={{ fontSize: 28, paddingTop: 12 }} type="dingtalk" />
              </Item.Avatar>
              <Item.Content>
                <Item.Title>应用名称</Item.Title>
                <Item.SubTitle>应用介绍应用介绍</Item.SubTitle>
              </Item.Content>
            </Item>
          )}
        />
      </div>
      <div>
        <p style={{ margin: '28px 0px 16px 16px' }}>通讯录列表</p>
        <List
          dataSource={data1}
          renderItem={(item) => (
            <Item>
              <Item.Avatar size={48} text="姓名" />
              <Item.Content>
                <Item.Title>
                  <span style={{ display: 'inline-block', width: 80, marginRight: 12 }}>{item.name}</span>
                  <span>{item.phone}</span>
                </Item.Title>
                <Item.SubTitle>
                  <span style={{ display: 'inline-block', width: 80, marginRight: 12 }}>{item.job}</span>
                  <span>{item.company}</span>
                </Item.SubTitle>
              </Item.Content>
            </Item>
          )}
        />
      </div>
      <div>
        <p style={{ margin: '28px 0px 16px 16px' }}>新闻公告</p>
        <List
          dataSource={data2}
          renderItem={(item) => (
            <Item>
              <Item.Content>
                <Item.Title>
                  这里是视频标题的内容，长文可以折行......
                </Item.Title>
                <Item.SubTitle style={{ marginTop: 5 }}>{item.subtitle}</Item.SubTitle>
                <img
                  style={{ marginTop: 6 }}
                  width="100%"
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              </Item.Content>
            </Item>
          )}
        />
      </div>
      <div>
        <p style={{ margin: '28px 0px 16px 16px' }}>横向展示</p>
        <List
          dataSource={data3}
          itemLayout="horizontal"
          renderItem={(item) => (
            <Item
              extra={item.extra}
            >
              <Item.Content>
                <Item.Title style={{ color: '#1C1D1D' }}>{item.title}</Item.Title>
                <div style={{ marginTop: 50 }}>
                  <Item.SubTitle>
                    {item.subtitle}
                    {item.time}
                  </Item.SubTitle>
                </div>
              </Item.Content>
            </Item>
          )}
        />
      </div>
      <div>
        <p style={{ margin: '28px 0px 16px 16px' }}>评论样式</p>
        <List
          dataSource={data2}
          renderItem={(item) => (
            <Item>
              <Item.Avatar size={32} text="永民" />
              <Item.Content>
                <div
                  style={{
                    display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#A6A8A9',
                  }}
                >
                  <Item.SubTitle>{item.name}</Item.SubTitle>
                  <div>
                    <span style={{ paddingRight: 6 }}>50</span>
                    <Icon type="like" style={{ color: '#646566', fontSize: 16 }} />
                  </div>
                </div>
                <Item.Title style={{ marginTop: 8 }}>{item.title}</Item.Title>
                <Item.SubTitle style={{ marginTop: 8 }}>一天前回复</Item.SubTitle>
              </Item.Content>
            </Item>
          )}
        />
      </div>
    </div>
  );
};
export default listDemo;
