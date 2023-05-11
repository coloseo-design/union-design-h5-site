import React from 'react';
import { Dialog, Icon } from 'union-design-h5';

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

const Demo = () => (
  <div>
    <p style={{ margin: '28px 0px 16px 16px' }}>基本用法</p>
    <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
      <div
        style={style}
        onClick={() => {
          Dialog.open({
            content: '这是内容这是内容这是内容',
            actions: [
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        <div>对话框 / 无标题</div>
        <Icon type="right" />
      </div>
      <div
        style={{ ...style, border: 'none' }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容',
            actions: [
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        <div>对话框 / 有标题</div>
        <Icon type="right" />
      </div>
    </div>
    <p style={{ margin: '28px 0px 16px 16px' }}>带辅助操作</p>
    <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
      <div
        style={style}
        onClick={() => {
          Dialog.open({
            content: '这是内容这是内容这是内容',
            actions: [
              { name: '辅助操作' },
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        <div>对话框 带辅助操作(无标题)</div>
        <Icon type="right" />
      </div>
      <div
        style={{ ...style, border: 'none' }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容',
            actions: [
              { name: '辅助操作' },
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        <div>对话框 带辅助操作(有标题)</div>
        <Icon type="right" />
      </div>
    </div>
    <p style={{ margin: '28px 0px 16px 16px' }}>多个操作</p>
    <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
      <div
        style={{ ...style, border: 'none' }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容这是内容这是内容',
            actions: [
              { name: '主要操作1', style: { color: 'red' } },
              { name: '主要操作2' },
              { name: '主要操作3' },
            ],
          });
        }}
      >
        <div>对话框 多个操作</div>
        <Icon type="right" />
      </div>
    </div>
    <p style={{ margin: '28px 0px 16px 16px' }}>自定义</p>
    <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
      <div
        style={{ ...style, border: 'none' }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 120,
                backgroundColor: '#646566',
                borderRadius: 6,
                color: '#fff',
              }}
              >
                自定义区域
              </div>
            ),
            actions: [
              { name: '辅助操作' },
              { name: '主要操作', style: { color: 'red' } },
            ],
          });
        }}
      >
        <div>对话框 / 自定义</div>
        <Icon type="right" />
      </div>
    </div>
    <p style={{ margin: '28px 0px 16px 16px' }}>通知类对话框</p>
    <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
      <div
        style={style}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
            notice: { name: '主按钮' },
          });
        }}
      >
        <div>对话框 / 通知类对话框 1</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={() => {
          Dialog.open({
            content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
            notice: { name: '主按钮' },
          });
        }}
      >
        <div>对话框 / 通知类对话框 2</div>
        <Icon type="right" />
      </div>
      <div
        style={{ ...style, border: 'none' }}
        onClick={() => {
          Dialog.open({
            title: '标题文案',
            content: (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 120,
                backgroundColor: '#646566',
                borderRadius: 6,
                color: '#fff',
              }}
              >
                自定义区域
              </div>
            ),
            notice: { name: '主按钮', onClick: () => Dialog.close() },
          });
        }}
      >
        <div>对话框 / 通知类对话框 3</div>
        <Icon type="right" />
      </div>
    </div>
  </div>
);

export default Demo;
