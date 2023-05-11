import React from 'react';
import {
  NumberKeyBoard, Toast, Icon,
} from 'union-design-h5';

const KeyBoardDemo = () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const handleDelete = (value?: string) => {
    console.log('--value', value);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShow(true);
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };
  const handleClick1 = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShow(false);
    setShow1(true);
    setShow2(false);
    setShow3(false);
  };
  const handleClick2 = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShow(false);
    setShow1(false);
    setShow2(true);
    setShow3(false);
  };
  const handleClick3 = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(true);
  };

  const handleInput = (value: unknown) => {
    Toast.info({ content: `${value}`, mask: false });
  };
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
  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>键盘样式</p>
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div style={style} onClick={handleClick}>
          <div>默认键盘</div>
          <Icon type="right" />
        </div>
        <div style={style} onClick={handleClick1}>
          <div>默认键盘-带完成按钮</div>
          <Icon type="right" />
        </div>
        <div style={style} onClick={handleClick2}>
          <div>身份证键盘</div>
          <Icon type="right" />
        </div>
        <div style={{ ...style, border: 'none' }} onClick={handleClick3}>
          <div>带title的键盘</div>
          <Icon type="right" />
        </div>
      </div>
      <NumberKeyBoard
        hideOnClickOutside
        show={show}
        onBlur={() => setShow(false)}
        onInput={handleInput}
      />
      <NumberKeyBoard
        hideOnClickOutside
        show={show1}
        complete
        onBlur={() => setShow1(false)}
        onInput={handleInput}
      />
      <NumberKeyBoard
        hideOnClickOutside
        show={show2}
        extraKey="X"
        onBlur={() => setShow2(false)}
        onInput={handleInput}
      />
      <NumberKeyBoard
        hideOnClickOutside
        show={show3}
        title="标题"
        onBlur={() => setShow3(false)}
        value="12345"
        onDelete={handleDelete}
        onInput={handleInput}
      />
    </div>
  );
};

export default KeyBoardDemo;
