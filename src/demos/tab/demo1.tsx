import React from 'react';
import { Tab, List, Avatar } from 'union-design-h5';
import { TabProps } from 'union-design-h5/lib/tab/tab';

// start 标签栏风格为card // end
const Demo1 = () => {
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

  const content = (
    <div style={{ margin: '10px 12px' }}>
      <List
        dataSource={data}
        itemLayout="vertical"
        style={{ borderRadius: 12 }}
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
    </div>
  );
  const TabType = (props: Omit<TabProps, 'children'>) => (
    <div
      style={{
        width: '100%',
        position: 'relative',
      }}
    >
      <Tab {...props}>
        <Tab.Item key="标签1" title="标签1" taskNum={22} taskWeight={2}>
          {content}
        </Tab.Item>
        <Tab.Item key="标签2" title="标签2" taskNum={42} taskWeight={2}>
          {content}
        </Tab.Item>
        <Tab.Item key="标签3" title="标签3" taskNum={129} dot>
          {content}
        </Tab.Item>
        <Tab.Item key="标签4" title="标签4" taskNum={37}>
          {content}
        </Tab.Item>
        <Tab.Item key="标签5" title="标签5">
          {content}
        </Tab.Item>
        <Tab.Item key="标签6" title="标签6">
          {content}
        </Tab.Item>
        <Tab.Item key="标签7" title="标签7">
          {content}
        </Tab.Item>
        <Tab.Item key="标签8" title="标签8">
          {content}
        </Tab.Item>
        <Tab.Item key="标签9" title="标签9">
          {content}
        </Tab.Item>
      </Tab>
    </div>
  );
  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>标签栏风格为card</p>
      {TabType({ type: 'card' })}
    </div>
  );
};

export default Demo1;
