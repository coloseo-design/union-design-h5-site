import React, { useState } from 'react';
import { Uploader } from 'union-design-h5';
import { UploaderFile } from 'union-design-h5/lib/uploader/uploader';

const Demo = () => {
  const [file, setFile] = useState<UploaderFile>();

  return (
    <>
      <p style={{ margin: '28px 0px 16px 16px' }}>上传文件</p>
      <div
        style={{
          width: '100%',
          height: 160,
          // border: '1px solid black',
          position: 'relative',
        }}
      >
        <Uploader.List
          style={{ margin: '20px 0px' }}
          action="http://10.13.5.99:3000/upload"
          onChange={(fileList) => {
            console.log('onChange:', fileList);
            if (!file) {
              setFile(fileList[0]);
            }
          }}
          beforeUpload={(file1) => { console.log('beforeUpload:', file1); return true; }}
          afterUpload={(file1) => console.log('afterUpload:', file1)}
        />
      </div>
      <p style={{ margin: '28px 0px 16px 16px' }}>展示文件</p>
      <div
        style={{
          width: '100%',
          height: 250,
          backgroundColor: '#FFFF',
          position: 'relative',
        }}
      >
        {file && (
          <Uploader.Preview
            showBtn
            showProgress
            showProgressDesc
            file={file}
            progress={1}
          />
        )}
      </div>
    </>
  );
};

export default Demo;
