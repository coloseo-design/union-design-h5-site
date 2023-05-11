import React from 'react';
import { Search } from 'union-design-h5';

const SearchDemo = () => (
  <div>
    <p style={{ margin: '16px 16px' }}>基础用法</p>
    <Search placeholder="搜索" onSubmit={(value) => alert(value)} />
    <p style={{ margin: '28px 0px 16px 16px' }}>展示取消按钮</p>
    <Search placeholder="搜索" showCancelButton />
    <p style={{ margin: '28px 0px 16px 16px' }}>展示返回按钮</p>
    <Search placeholder="搜索" showBackIcon />
    <p style={{ margin: '28px 0px 16px 16px' }}>展示返回，取消按钮</p>
    <Search placeholder="搜索" showBackIcon showCancelButton />
  </div>
);

export default SearchDemo;
