import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Icon, DatePicker } from 'union-design-h5';

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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingRight: 12,
  };
  const handleClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>基础用法</p>
      <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
        <div style={style} onClick={handleClick}>
          <div>基础用法</div>
          <Icon type="right" />
        </div>
      </div>
      <DatePicker
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
