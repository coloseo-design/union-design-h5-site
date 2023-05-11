import React, { useState } from 'react';
import { Button, Overlay, Icon } from 'union-design-h5';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const style = {
    height: 44,
    width: '100%',
    cursor: 'pointer',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 12,
  };
  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>基本用法</p>
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div
          style={style}
          onClick={() => setVisible(true)}
        >
          <div>显示遮罩层</div>
          <Icon type="right" />
        </div>
      </div>
      <p style={{ margin: '28px 0px 16px 16px' }}>嵌入内容</p>
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div
          style={style}
          onClick={() => setVisible1(true)}
        >
          <div>嵌入内容</div>
          <Icon type="right" />
        </div>
      </div>
      <Overlay visible={visible} onClick={() => setVisible(false)} />
      <Overlay visible={visible1} onClick={() => setVisible1(false)}>
        <div style={{ width: 120, height: 120, backgroundColor: '#fff' }} />
      </Overlay>
    </div>
  );
};

export default Demo;
