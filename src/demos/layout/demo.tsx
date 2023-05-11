import React from 'react';
import { Layout, List, Avatar } from 'union-design-h5';

const { Card, Content } = Layout;

const { Item } = List;
const data = [
  {
    title: '某某某提交的报销审批审',
    time: 'yyyy.mm.dd 00:00',
    source: '通知来源',
    extra: (
      <div
        style={{
          width: 120, height: 88, background: '#C8CCCC', marginLeft: 12, borderRadius: 6,
        }}
      />
    ),
    content: (
      <>
        <div>
          标题字段：内容内容内容
        </div>
        <div>
          标题字段：内容内容内容
        </div>
        <div>
          标题字段：内容内容内容
        </div>
      </>
    ),
  },
];

const data1 = [
  {
    title: '这里是新闻内容，长文可以折 这里是新闻内容，长文可以折',
    time: 'yyyy.mm.dd 00:00',
    source: '通知来源',
    subtitle: '一级信息',
    extra: (
      <div
        style={{
          width: 120, height: 88, background: '#C8CCCC', marginLeft: 12, borderRadius: 6, flex: '0 0 auto',
        }}
      />
    ),
  },
  {
    title: '这里是新闻内容，长文可以折 这里是新闻内容，长文可以折',
    time: 'yyyy.mm.dd 00:00',
    source: '通知来源',
    subtitle: '一级信息',
    extra: (
      <div
        style={{
          width: 120, height: 88, background: '#C8CCCC', marginLeft: 12, borderRadius: 6, flex: '0 0 auto',
        }}
      />
    ),
  },
];
const LayoutDemo = () => (
  <div>
    <p style={{ margin: '28px 0px 16px 16px' }}> card 布局</p>
    <Layout type="card">
      <Card>
        <List
          dataSource={data}
          itemLayout="vertical"
          renderItem={(item) => (
            <Item>
              <Item.Content>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Item.SubTitle>{item.time}</Item.SubTitle>
                  <Item.SubTitle>{item.source}</Item.SubTitle>
                </div>
                <Item.Title style={{ marginTop: 8 }}>{item.title}</Item.Title>
                <div style={{ marginTop: 8, fontSize: 12, color: '#646566' }}>
                  {item.content}
                </div>
                <div
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: 8, alignItems: 'center', alignContent: 'center',
                  }}
                >
                  <div>
                    <div style={{ transform: 'scale(0.7)', display: 'inline-block' }}>
                      <Avatar text="姓名" size={32} />
                    </div>
                    <span style={{ paddingLeft: 4, fontSize: 12 }}>由姓名提交</span>
                  </div>
                  <div
                    style={{
                      width: 52, height: 16, background: '#EBF4FF', borderRadius: 2, fontSize: 12, color: 'rgb(111,154,235)',
                    }}
                  >
                    状态标签
                  </div>
                </div>
              </Item.Content>
            </Item>
          )}
        />
      </Card>
      <Card>
        <List
          dataSource={data}
          itemLayout="vertical"
          renderItem={(item) => (
            <Item>
              <Item.Content>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Item.SubTitle>{item.time}</Item.SubTitle>
                  <Item.SubTitle>{item.source}</Item.SubTitle>
                </div>
                <Item.Title style={{ marginTop: 8 }}>{item.title}</Item.Title>
                <div style={{ marginTop: 8, fontSize: 12, color: '#646566' }}>
                  {item.content}
                </div>
                <div
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: 8, alignItems: 'center', alignContent: 'center',
                  }}
                >
                  <div>
                    <div style={{ transform: 'scale(0.7)', display: 'inline-block' }}>
                      <Avatar text="姓名" size={32} />
                    </div>
                    <span style={{ paddingLeft: 4, fontSize: 12 }}>由姓名提交</span>
                  </div>
                  <div
                    style={{
                      width: 52, height: 16, background: '#EBF4FF', borderRadius: 2, fontSize: 12, color: 'rgb(111,154,235)',
                    }}
                  >
                    状态标签
                  </div>
                </div>
              </Item.Content>
            </Item>
          )}
        />
      </Card>
      <Card>
        <List
          dataSource={data}
          itemLayout="vertical"
          renderItem={(item) => (
            <Item>
              <Item.Content>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Item.SubTitle>{item.time}</Item.SubTitle>
                  <Item.SubTitle>{item.source}</Item.SubTitle>
                </div>
                <Item.Title style={{ marginTop: 8 }}>{item.title}</Item.Title>
                <div style={{ marginTop: 8, fontSize: 12, color: '#646566' }}>
                  {item.content}
                </div>
                <div
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: 8, alignItems: 'center', alignContent: 'center',
                  }}
                >
                  <div>
                    <div style={{ transform: 'scale(0.7)', display: 'inline-block' }}>
                      <Avatar text="姓名" size={32} />
                    </div>
                    <span style={{ paddingLeft: 4, fontSize: 12 }}>由姓名提交</span>
                  </div>
                  <div
                    style={{
                      width: 52, height: 16, background: '#EBF4FF', borderRadius: 2, fontSize: 12, color: 'rgb(111,154,235)',
                    }}
                  >
                    状态标签
                  </div>
                </div>
              </Item.Content>
            </Item>
          )}
        />
      </Card>
    </Layout>
    <br />
    <p style={{ margin: '28px 0px 16px 16px' }}> 普通布局</p>
    <Layout>
      <Content>
        <List
          dataSource={data1}
          itemLayout="horizontal"
          renderItem={(item) => (
            <Item
              extra={item.extra}
              style={{ padding: '0.625em 0px' }}
            >
              <Item.Content>
                <Item.Title style={{ color: '#1C1D1D' }}>{item.title}</Item.Title>
                <div style={{ marginTop: 24 }}>
                  <Item.SubTitle>
                    {item.subtitle}
                    {item.time}
                  </Item.SubTitle>
                </div>
              </Item.Content>
            </Item>
          )}
        />
      </Content>
    </Layout>
  </div>
);

export default LayoutDemo;
