import React, { useState } from 'react';
import { Icon, Tooltip } from 'union-design';
import Highlight from 'highlight-for-react';

const Copy: React.FC<any> = (props) => {
  const { code } = props;
  const [copySuccess, setCopy] = useState(false);
  const handleCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
    document.body.removeChild(textarea);
  };

  // React.useEffect(() => {
  //   // const a = document.querySelector('#testTop');
  //   // if (a) {
  //   //   a.scrollTop = 300;
  //   // }
  // }, []);
  return (
    <div>
      <div className="box-operation">
        <Tooltip
          message={copySuccess ? '复制成功' : '复制代码'}
          trigger="hover"
        >
          <Icon
            type={copySuccess ? 'success' : 'copy'}
            style={{
              fontSize: 20, color: '#ACAFB9', cursor: 'pointer', marginRight: 20,
            }}
            onClick={handleCopy}
          />
        </Tooltip>
      </div>
      <div
        style={{ background: '#fff' }}
        // onScroll={(e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        //   console.log('===ee', (e.target as HTMLElement)?.scrollTop);
        // }}
        // id="testTop"
      >
        <Highlight>{code}</Highlight>
      </div>
    </div>
  );
};

export default Copy;
