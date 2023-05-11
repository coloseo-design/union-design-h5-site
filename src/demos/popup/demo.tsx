import React, { useState } from 'react';
import { Popup, Icon } from 'union-design-h5';

const PopupDemo = () => {
  const [vmodel, setModal] = useState(false);
  const [vmodel1, setVmodel1] = useState(false);
  const [vmodel2, setVmodel2] = useState(false);
  const [vmodel3, setVmodel3] = useState(false);
  const [vmodel4, setVmodel4] = useState(false);
  const [vmodel6, setVmodel6] = useState(false);

  const handleCancel = () => {
    setModal(false);
    setVmodel6(false);
    setVmodel4(false);
    setVmodel3(false);
    setVmodel2(false);
    setVmodel1(false);
  };

  const content = (
    <div
      style={{
        height: 300,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      自定义内容
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
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>popup弹出层用法</p>
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div style={style} onClick={() => setModal(true)}>
          <div>基本</div>
          <Icon type="right" />
        </div>
        <div style={style} onClick={() => setVmodel1(true)}>
          <div>顶部弹出</div>
          <Icon type="right" />
        </div>
        <div style={style} onClick={() => setVmodel2(true)}>
          <div>底部弹出</div>
          <Icon type="right" />
        </div>
        <div style={style} onClick={() => setVmodel3(true)}>
          <div>左侧弹出</div>
          <Icon type="right" />
        </div>
        <div style={style} onClick={() => setVmodel4(true)}>
          <div>右侧弹出</div>
          <Icon type="right" />
        </div>
        <div style={{ ...style, border: 'none' }} onClick={() => setVmodel6(true)}>
          <div>自定义弹出header</div>
          <Icon type="right" />
        </div>
      </div>
      <Popup
        visible={vmodel}
        position="center"
        onCancel={handleCancel}
        style={{ width: 320 }}
        header="标题"
      >
        {content}
      </Popup>
      <Popup
        visible={vmodel1}
        position="top"
        onCancel={handleCancel}
        header="标题"
      >
        {content}
      </Popup>
      <Popup
        visible={vmodel2}
        position="bottom"
        onCancel={handleCancel}
        header="标题"
      >
        {content}
      </Popup>
      <Popup
        visible={vmodel3}
        position="left"
        onCancel={handleCancel}
        style={{ width: 320 }}
      >
        {content}
      </Popup>
      <Popup
        visible={vmodel4}
        position="right"
        onCancel={handleCancel}
        style={{ width: 320 }}
      >
        {content}
      </Popup>
      <Popup
        visible={vmodel6}
        position="bottom"
        onCancel={handleCancel}
        onOk={handleCancel}
        closeable={false}
        header={(
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div onClick={handleCancel}>取消</div>
            <div>设计系统</div>
            <div onClick={handleCancel}>确定</div>
          </div>
        )}
      >
        {content}
      </Popup>
    </div>
  );
};

export default PopupDemo;
