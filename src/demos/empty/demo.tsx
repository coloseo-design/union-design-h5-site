import React from 'react';
import { Empty } from 'union-design-h5';

const EmptyDemo = () => (
  <div
    style={{
      backgroundColor: 'white',
    }}
  >
    <Empty />
    <Empty type="ThereWasNothing" />
    <Empty type="ThereWasNothing" description="测试测试测试" />
    <Empty type="TakeACoffeeBreak" />
    <Empty type="NoPermission" />
    <Empty type="SearchForSomethingElse" />
    <Empty type="HighlyEfficientWork" />
    <Empty type="ThePageIsMissing" />
    <Empty type="NoBrowsingRecord" />
    <Empty type="NoComment" />
    <Empty type="NoNotice" />
    <Empty type="NoNetwork" />
    <Empty type="NoDataAvailable" />
  </div>
);

export default EmptyDemo;
