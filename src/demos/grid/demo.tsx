import React from 'react';
import { Row, Col } from 'union-design-h5';

const style = {
  height: 38,
  backgroundColor: 'rgba(0,146,255,.75)',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
};

const style1 = {
  height: 32,
  width: '100%',
  background: '#d3dce6',
  borderRadius: 4,
};
const GridDemo = () => (
  <div>
    <p style={{ margin: '28px 0px 16px 16px' }}>基本用法</p>
    <div>
      <Row
        align="top"
        justify="space-between"
      >
        <Col span={3}>
          <div style={style1} />
        </Col>
        <Col span={3}>
          <div style={{ ...style1, background: '#e5e9f2' }} />
        </Col>
        <Col span={3}>
          <div style={style1} />
        </Col>
        <Col span={3}>
          <div style={{ ...style1, background: '#e5e9f2' }} />
        </Col>
      </Row>
      <Row
        align="top"
        justify="space-between"
        style={{ marginTop: 24 }}
      >
        <Col span={6}>
          <div style={style1} />
        </Col>
        <Col span={6}>
          <div style={{ ...style1, background: '#e5e9f2' }} />
        </Col>
      </Row>
    </div>
    <p style={{ margin: '28px 0px 16px 16px' }}>分栏间隔</p>
    <Row
      gutter={16}
      align="top"
      justify="space-between"
    >
      <Col span={3}>
        <div style={style1} />
      </Col>
      <Col span={3}>
        <div style={{ ...style1, background: '#e5e9f2' }} />
      </Col>
      <Col span={3}>
        <div style={style1} />
      </Col>
      <Col span={3}>
        <div style={{ ...style1, background: '#e5e9f2' }} />
      </Col>
    </Row>
    <p style={{ margin: '28px 0px 16px 16px' }}>分栏偏移</p>
    <Row
      align="top"
      justify="space-between"
    >
      <Col span={6}>
        <div style={style1} />
      </Col>
      <Col span={3} offset={3}>
        <div style={style1} />
      </Col>
    </Row>
    <Row
      align="top"
      justify="space-between"
      style={{ marginTop: 12 }}
    >
      <Col span={6}>
        <div style={style1} />
      </Col>
      <Col span={5} offset={1}>
        <div style={style1} />
      </Col>
    </Row>
    <p style={{ margin: '28px 0px 16px 16px' }}>响应式布局</p>
    <Row
      align="top"
      justify="space-between"
      gutter={{
        lg: 16, xl: 24, xxl: 24, md: 8, sm: 8, xxs: 8,
      }}
    >
      <Col
        xxl={{ span: 6, offset: 0 }}
        xl={{ span: 6, offset: 0 }}
        lg={{ span: 5, offset: 1 }}
        md={{ span: 4, offset: 2 }}
        sm={{ span: 4, offset: 2 }}
        xxs={{ span: 3, offset: 1 }}
      >
        <div style={style1} />
      </Col>
      <Col
        xxl={{ span: 6, offset: 0 }}
        xl={{ span: 6, offset: 0 }}
        lg={{ span: 5, offset: 1 }}
        md={{ span: 4, offset: 2 }}
        sm={{ span: 4, offset: 2 }}
        xxs={{ span: 6, offset: 1 }}
      >
        <div style={{ ...style1, background: '#e5e9f2' }} />
      </Col>
    </Row>
  </div>
);

export default GridDemo;
