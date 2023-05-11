import React, { ReactNode, useCallback, useMemo } from 'react';
import { IndexBar } from 'union-design-h5';

export const Demo = () => {
  const getRandom = useCallback(
    (min: number, max: number) => Math.random() * (max - min) + min,
    [],
  );
  const contentList = [1, 2, 3, 4, 5, 7];
  const content = useMemo(() => {
    const list = [] as ReactNode[];
    for (let i = 65; i < 91; i += 1) {
      list.push(<IndexBar.Anchor key={`${i}-anchor`} id={String.fromCharCode(i)} />);
      list.push(
        <div
          key={`${i}-content`}
          style={{
            backgroundColor: '#fff',
            color: '#1C1D1D',
            padding: '0px 16px',
          }}
        >
          {(contentList || []).map((item) => (
            <div
              key={item}
              style={{
                height: 44,
                padding: '12px 0px',
                borderBottom: item === 7 ? 'none' : '1px solid #EEF0F0',
              }}
            >
              内容
              {item}
            </div>
          ))}
        </div>,
      );
    }
    return list;
  }, [getRandom]);

  return (
    <>
      <p style={{ margin: '28px 0px 16px 16px' }}>基础用法</p>
      <div
        style={{
          width: '100%',
          height: 500,
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        }}
      >
        <IndexBar>
          {content}
        </IndexBar>
      </div>
      <p style={{ margin: '28px 0px 16px 16px' }}>自定义锚点列表</p>
      <div
        style={{
          width: '100%',
          height: 500,
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <IndexBar indexList={['1', '2', '3']}>
          <IndexBar.Anchor id="1" />
          <div
            style={{
              height: 300, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center',
            }}
          >
            这是自定义列表内容1
          </div>
          <IndexBar.Anchor id="2" />
          <div
            style={{
              height: 300, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center',
            }}
          >
            这是自定义列表内容2
          </div>
          <IndexBar.Anchor id="3" />
          <div
            style={{
              height: 300, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center',
            }}
          >
            这是自定义列表内容3
          </div>
        </IndexBar>
      </div>
    </>
  );
};

export default Demo;
