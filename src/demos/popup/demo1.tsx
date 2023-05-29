import React, { useState } from 'react';
import {
  Popup, Icon, Capsule,
} from 'union-design-h5';

// start popup全屏弹出和在某个相对定位的父级div中弹出 // end
const PopupDemo = () => {
  const [fullVisible, setFull] = useState(false);
  const [containerVisible, setContainer] = useState(false);

  const handleCancel = () => {
    setFull(false);
    setContainer(false);
  };

  const content = (num: number) => (
    <div style={{ textAlign: 'center' }}>
      {
        (Array.from(Array(num), (_, k) => k + 1) || []).map((item) => (
          <p key={item}>这是一条内容</p>
        ))
      }
      <p>这是一条内容黑哈哈哈哈</p>
    </div>
  );

  const style = {
    height: 44,
    width: '100%',
    cursor: 'pointer',
    alignItems: 'center',
    alignContent: 'center',
    borderBottom: '1px solid #EEF0F0',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 12,
  };
  return (
    <div id="container" style={{ position: 'relative', height: 500 }}>
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div style={style} onClick={() => setContainer(true)}>
          <div>在父级中弹出</div>
          <Icon type="right" />
        </div>
      </div>
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div style={style} onClick={() => setFull(true)}>
          <div>全屏展示</div>
          <Icon type="right" />
        </div>
      </div>
      <Popup
        visible={containerVisible}
        position="right"
        header="标题"
        onCancel={handleCancel}
        getPopupContainer={() => document.getElementById('container')}
      >
        {content(7)}
      </Popup>
      <Popup
        closeable={false}
        visible={fullVisible}
        position="left"
        onCancel={handleCancel}
        fullScreen
        footer={null}
        headerStyle={{
          border: 'none', height: 'auto', padding: 14, fontWeight: 400,
        }}
        header={(
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Icon type="right" />
              <div>确认同意</div>
              <Capsule
                onClose={() => {
                  handleCancel();
                }}
              />
            </div>
            <div style={{
              marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}
            >
              <div>确认同意</div>
              <div style={{ color: 'red' }}>完成</div>
            </div>
          </div>
        )}
      >
        <div style={{ width: '100%', height: 12, backgroundColor: 'rgb(250, 250, 250)' }} />
        {content(7)}
      </Popup>
    </div>
  );
};

export default PopupDemo;
