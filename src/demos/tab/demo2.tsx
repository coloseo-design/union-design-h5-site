/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Tab } from 'union-design-h5';

// start 作为页面滚动导航 // end
const Demo2 = () => {
  const [selectKey, setKey] = useState('1');
  const tabHeight = 86;
  const content = Array.from({ length: 25 }).map((_, k) => (
    <p key={k}>页面内容页面内容页面内容页面内容页面内容页面内容</p>
  ));
  const tabsData = [
    {
      key: '1',
      title: '标签1',
      taskNum: 99,
    },
    {
      key: '2',
      title: '标签2',
      taskNum: 67,
    },
    {
      key: '3',
      title: '标签3',
      taskNum: 88,
    },
  ];

  const handleChange = React.useCallback((key: string) => {
    const element = document.getElementById(`标签${key}`);
    element?.scrollIntoView();
    if (element) {
      element?.scrollIntoView();
      window.scrollTo({
        top: window.scrollY - tabHeight,
      });
    }
  }, []);

  const scroll = () => {
    const { scrollTop } = document.documentElement;
    let key = selectKey;
    for (const item of tabsData) {
      const el = document.getElementById(`${item.title}`);
      if (!el) continue;
      const rect = el?.getBoundingClientRect();
      if (rect.top <= tabHeight) {
        key = item.key;
      } else {
        break;
      }
    }
    // tabsData.forEach((item) => {
    //   const itemTop = document.getElementById(`${item.title}`)?.offsetTop || 0;
    //   if (scrollTop >= itemTop) {
    //     if (selectKey !== item.key) {
    //       key = item.key;
    //     }
    //   }
    // });
    setKey(key);
  };

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);
  return (
    <div style={{ background: '#fff' }}>
      <Tab
        contentDirection="vertical"
        selectedKey={selectKey}
        type="task"
        onTabChange={handleChange}
        className="scrollTab"
        tabStyle={{ position: 'sticky', top: 0, zIndex: 10 }}
      >
        {tabsData.map((item) => (
          <Tab.Item key={item.key} taskNum={item.taskNum}>
            <h2 id={item.title}>{item.title}</h2>
            <div style={{ padding: 12 }}>
              {content}
            </div>
          </Tab.Item>
        ))}
      </Tab>
    </div>
  );
};

export default Demo2;
