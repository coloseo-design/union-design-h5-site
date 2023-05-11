import React from 'react';
import { File } from 'union-design-h5';

const Demo = () => {
  const btnList = [
    {
      name: '预览',
      onClick: () => console.log('预览'),
    },
  ];
  return (
    <div style={{ background: '#fff'}}>
      <File
        name="文件.ppt"
        desc="3440kb"
        btnList={btnList}
        closeEnable
        onClose={() => console.log('onClose')}
      />
      <File
        name="文件.docx"
        desc="3440kb"
        btnList={btnList}
        closeEnable
        onClose={() => console.log('onClose')}
      />
      <File
        name="文件.pdf"
        desc="3440kb"
        btnList={[
          {
            name: '取消',
            onClick: () => console.log('取消'),
          },
        ]}
      />
      <File
        name="自定义图标.ppt"
        desc="3440kb"
        btnList={btnList}
        closeEnable
        onClose={() => console.log('onClose')}
        iconRender={() => <div style={{ backgroundColor: 'red' }}>a</div>}
      />
    </div>
  );
};

export default Demo;
