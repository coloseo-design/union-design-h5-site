import React from 'react';
import { PullRefresh, Tab } from 'union-design-h5';

const Demo = () => {
  const sleep = (timer: number) => new Promise((resolve) => setTimeout(resolve, timer));
  const handleRefresh = async () => {
    await sleep(3000);
  };
  return (
    <div>
      <Tab>
        <Tab.Item key="1" title="基础用法">
          <PullRefresh onRefresh={handleRefresh}>
            <p>
              刷新次数1
            </p>
          </PullRefresh>
        </Tab.Item>
        <Tab.Item key="2" title="成功提示">
          <PullRefresh
            onRefresh={handleRefresh}
            successDuration={2000}
            successText={<div>哈哈哈哈我成功刷新了</div>}
          >
            <div style={{ minHeight: '100vh' }}>
              刷新次数2
            </div>
          </PullRefresh>
        </Tab.Item>
        <Tab.Item key="3" title="自定义提示">
          <PullRefresh
            onRefresh={handleRefresh}
            pullingText={<div>下拉中</div>}
            headHeight={120}
            successDuration={1000}
            loadingText={(
              <div style={{ display: 'flex', width: '100%' }}>
                <p>我在加载</p>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" style={{ height: 120 }} alt="lo" />
              </div>
          )}
            successText={(
              <div style={{ display: 'flex' }}>
                <p>成功啦</p>
                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ height: 120 }} alt="success" />
              </div>
          )}
          >
            <div style={{ minHeight: '100vh' }}>
              刷新次数3
            </div>
          </PullRefresh>
        </Tab.Item>
      </Tab>
    </div>
  );
};

export default Demo;
