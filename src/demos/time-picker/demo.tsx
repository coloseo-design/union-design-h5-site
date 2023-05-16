import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Icon, TimePicker } from 'union-design-h5';

const TimePickerDemo = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [value, setValue] = useState(dayjs());
  const [defaultValue, setDefault] = useState('12:56:24');
  const onChange = (v: dayjs.Dayjs) => {
    setValue(v);
  };
  const style = {
    height: 44,
    width: '100%',
    cursor: 'pointer',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 12,
  };
  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>选择时间</p>
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div style={style} onClick={() => setVisible(true)}>
          <div>基础用法</div>
          <Icon type="right" />
        </div>
      </div>
      <TimePicker
        visible={visible}
        title="请选择"
        onCancel={() => setVisible(false)}
        onChange={onChange}
        onOk={() => {
          console.log('===ok');
        }}
        value={value}
      />
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div style={style} onClick={() => setVisible1(true)}>
          <div>自定义渲染列表renderItem</div>
          <Icon type="right" />
        </div>
      </div>
      <TimePicker
        visible={visible1}
        title="请选择"
        onCancel={() => setVisible1(false)}
        onChange={onChange}
        defaultValue={defaultValue}
        renderItem={(val: any) => {
          console.log('==value', val);
          return <span>{val.value}</span>;
        }}
      />
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div style={style} onClick={() => setVisible2(true)}>
          <div>设置可见对象个数 visibleItemCount</div>
          <Icon type="right" />
        </div>
      </div>
      <TimePicker
        visible={visible2}
        title="请选择"
        onCancel={() => setVisible2(false)}
        onChange={onChange}
        visibleItemCount={4}
      />
    </div>
  );
};

export default TimePickerDemo;
