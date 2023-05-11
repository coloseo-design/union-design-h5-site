import React from 'react';
import { Swipe, ImagePreview } from 'union-design-h5';

const Demo = () => (
  <div>
    <p style={{ margin: '0px 0px 16px 16px', alignItems: 'left' }}>自动轮播</p>
    <Swipe width={342} height={152} style={{ margin: '0 auto' }}>
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=737555197,308540855&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=91673060,7145840&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=1297102096,3476971300&fm=193&f=GIF" />
    </Swipe>
    <p style={{ margin: '28px 0px 16px 16px', alignItems: 'left' }}>左右滑动轮播</p>
    <Swipe width={342} height={152} style={{ margin: '0 auto' }} autoplay={false}>
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=737555197,308540855&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=91673060,7145840&fm=193&f=GIF" />
      <ImagePreview imgSrc="https://t7.baidu.com/it/u=1297102096,3476971300&fm=193&f=GIF" />
    </Swipe>
  </div>
);

export default Demo;
