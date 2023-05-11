import React from 'react';
import { ImagePreview } from 'union-design-h5';

const Demo = () => (
  <div style={{
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  }}
  >
    <div style={{ width: '100%', height: 172 }}>
      <ImagePreview
        enableFullScreen
        imgSrc="https://t7.baidu.com/it/u=1297102096,3476971300&fm=193&f=GIF"
        imgOriginalSrc="https://t7.baidu.com/it/u=737555197,308540855&fm=193&f=GIF"
      />
    </div>
  </div>
);

export default Demo;
