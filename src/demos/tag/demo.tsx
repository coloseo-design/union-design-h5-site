import React from 'react';
import { Tag } from 'union-design-h5';

const TagDemo = () => (
  <div>
    <p style={{ margin: '28px 0px 16px 16px' }}>基本样式</p>
    <div style={{ paddingLeft: 16 }}><Tag>标签</Tag></div>
    <p style={{ margin: '28px 0px 16px 16px' }}>圆形标签</p>
    <div style={{ paddingLeft: 16 }}><Tag round>标签</Tag></div>
    <p style={{ margin: '28px 0px 16px 16px' }}>空洞标签</p>
    <div style={{ paddingLeft: 16 }}><Tag hollow>标签</Tag></div>
    <p style={{ margin: '28px 0px 16px 16px' }}>圆形空洞标签</p>
    <div style={{ paddingLeft: 16 }}><Tag round hollow>标签</Tag></div>
    <p style={{ margin: '28px 0px 16px 16px' }}>大标签</p>
    <div style={{ paddingLeft: 16 }}><Tag big>标签</Tag></div>
  </div>
);
export default TagDemo;
