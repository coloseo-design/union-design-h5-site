import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Icon, TimePicker } from 'union-design-h5';

const TimePickerDemo = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(dayjs());
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
        value={value}
      />
    </div>
  );
};

export default TimePickerDemo;
