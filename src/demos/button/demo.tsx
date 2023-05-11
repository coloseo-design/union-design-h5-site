import React from 'react';
import { Button } from 'union-design-h5';

const style = {
  marginBottom: 16,
};
// start button 基本样式 // end
const ButtonDemo: React.FC<unknown> = () => (
  <div style={{ padding: 16 }}>
    <div style={{ marginBottom: 28 }}>
      <p style={{ marginBottom: 16, fontSize: 18, color: '#1C1D1D' }}>大按钮-主按钮</p>
      <p style={{ margin: '16px 0px' }}>无图标</p>
      <Button type="primary" style={style} block size="large">大按钮（未点击）</Button>
      <Button type="primary" style={style} block size="large" disabled>大按钮（不可用）</Button>
    </div>

    <div style={{ marginBottom: 10 }}>
      <p style={{ margin: '16px 0px' }}>有图标</p>
      <Button type="primary" style={style} icon="add" block size="large">
        大按钮（未点击）
      </Button>
      <Button type="primary" style={style} icon="add" block size="large" disabled>
        大按钮（不可用）
      </Button>
      <p style={{ margin: '16px 0px' }}>loading</p>
      <Button style={style} type="primary" block size="large" loading>大按钮-主按钮loading</Button>
    </div>

    <div style={{ marginBottom: 28 }}>
      <p style={{ marginBottom: 16, fontSize: 18, color: '#1C1D1D' }}>大按钮-次按钮</p>
      <p style={{ margin: '16px 0px' }}>无图标</p>
      <Button size="large" style={style} block>次按钮（未点击）</Button>
      <Button size="large" style={style} disabled block>次按钮（不可用）</Button>
      <Button size="large" style={style} type="light" block>次按钮（未点击）</Button>
      <Button size="large" style={style} type="light" disabled block>次按钮（不可用状态）</Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <p style={{ margin: '16px 0px' }}>有图标</p>
      <Button size="large" style={style} icon="add" block>次按钮（未点击）</Button>
      <Button size="large" style={style} icon="add" disabled block>次按钮（不可用）</Button>
      <Button size="large" style={style} icon="add" type="light" block>次按钮（未点击）</Button>
      <Button size="large" style={style} type="light" icon="add" disabled block>次按钮（不可用状态）</Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <p style={{ margin: '16px 0px' }}>loading</p>
      <Button style={style} block size="large" loading>大按钮-次按钮loading</Button>
    </div>
    <div style={{ marginBottom: 28 }}>
      <p style={{ marginBottom: 16, fontSize: 18, color: '#1C1D1D' }}>中按钮-主按钮</p>
      <p style={{ margin: '16px 0px' }}>无图标</p>
      <Button type="primary" style={{ ...style, marginRight: 16 }}>主按钮（未点击）</Button>
      <Button type="primary" style={style} disabled>主按钮（不可用）</Button>
      <p style={{ margin: '16px 0px' }}>有图标</p>
      <div>
        <Button type="primary" icon="add" style={{ ...style, marginRight: 16 }}>次按钮（未点击）</Button>
        <Button type="primary" icon="add" style={style} disabled>次按钮（不可用）</Button>
      </div>
      <p style={{ margin: '16px 0px' }}>loading</p>
      <Button type="primary" style={style} loading>中按钮-主按钮loading</Button>
    </div>
    <div style={{ marginBottom: 28 }}>
      <p style={{ marginBottom: 16, fontSize: 18, color: '#1C1D1D' }}>中按钮-次按钮</p>
      <p style={{ margin: '16px 0px' }}>无图标</p>
      <Button style={{ ...style, marginRight: 16 }}>次按钮（未点击）</Button>
      <Button style={style} disabled>次按钮（不可用）</Button>
      <Button type="light" style={{ ...style, marginRight: 16 }}>次按钮（未点击）</Button>
      <Button type="light" style={style} disabled>次按钮（不可用）</Button>
      <p style={{ margin: '16px 0px' }}>有图标</p>
      <Button icon="add" style={{ ...style, marginRight: 16 }}>次按钮（未点击）</Button>
      <Button icon="add" style={style} disabled>次按钮（不可用）</Button>
      <Button type="light" icon="add" style={{ ...style, marginRight: 16 }}>次按钮（未点击）</Button>
      <Button type="light" icon="add" style={style} disabled>次按钮（不可用）</Button>
      <p style={{ margin: '16px 0px' }}>中按钮-loading</p>
      <Button style={style} loading>中按钮-次按钮loading</Button>
    </div>
    <div style={{ marginBottom: 28 }}>
      <p style={{ marginBottom: 16, fontSize: 18, color: '#1C1D1D' }}>轻按钮</p>
      <p style={{ margin: '16px 0px' }}>无图标</p>
      <Button size="small" style={{ ...style, marginRight: 16 }}>未点击</Button>
      <Button size="small" type="primary" disabled style={{ ...style, marginRight: 16 }}>不可用</Button>
      <div>
        <Button size="small" type="light" style={{ ...style, marginRight: 16 }}>未点击</Button>
        <Button size="small" type="light" disabled style={{ ...style, marginRight: 16 }}>不可用</Button>
      </div>
      <p style={{ margin: '16px 0px' }}>有图标</p>
      <Button size="small" icon="add" style={{ ...style, marginRight: 16 }}>未点击</Button>
      <Button size="small" icon="add" type="primary" disabled style={{ ...style, marginRight: 16 }}>不可用</Button>
      <div>
        <Button size="small" icon="add" type="light" style={{ ...style, marginRight: 16 }}>未点击</Button>
        <Button size="small" icon="add" type="light" disabled style={{ ...style, marginRight: 16 }}>不可用</Button>
      </div>
      <p style={{ margin: '16px 0px' }}>轻按钮loading</p>
      <Button size="small" type="light" loading>loading</Button>
    </div>
  </div>
);

export default ButtonDemo;
