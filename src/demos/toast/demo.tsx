import React from 'react';
import { Toast, Icon, Loading } from 'union-design-h5';

const style = {
  height: 44,
  width: '100%',
  cursor: 'pointer',
  alignItems: 'center',
  alignContent: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight: 12,
  borderBottom: '1px solid #EEF0F0',
};

const ToastDemo = () => (
  <div>
    <p style={{ margin: '28px 0px 16px 16px' }}>基本用法</p>
    <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
      <div
        style={style}
        onClick={() => Toast.info({ icon: <Loading color="#fff" type="spinner" size={40} />, content: '操作提示' })}
      >
        <div>大提示框</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={
          () => Toast.info({
            icon: <Loading color="#fff" type="spinner" size={40} />,
            content: '最多展示两行最多展示两行最多展示两行最多展示两行',
          })
        }
      >
        <div>大提示框-两行展示</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={() => Toast.info({ content: '提示内容', vertical: false })}
      >
        <div>中提示框</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={() => Toast.info({ content: '提示内容', vertical: false, icon: <Loading color="#fff" type="spinner" /> })}
      >
        <div>中提示框-自定义icon</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={() => Toast.info({ icon: <Loading color="#fff" type="spinner" /> })}
      >
        <div>小提示框1</div>
        <Icon type="right" />
      </div>
      <div
        style={{ ...style }}
        onClick={() => Toast.info({ icon: <Loading color="#fff" /> })}
      >
        <div>小提示框2</div>
        <Icon type="right" />
      </div>
    </div>
  </div>
);

export default ToastDemo;
