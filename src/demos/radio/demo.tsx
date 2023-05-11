import React from 'react';
import { Radio } from 'union-design-h5';

const RadioDemo = () => (
  <>
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>基本样式</p>
      <div style={{ backgroundColor: '#fff', padding: '8px 16px' }}>
        <Radio onChange={(checked) => console.log('checked', checked)}>单选框（默认）</Radio>
        <Radio checked>单选框（选中）</Radio>
        <Radio disabled>单选框（禁止）</Radio>
        <Radio disabled checked>单选框（选中且禁止）</Radio>
      </div>
    </div>

    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>从数组生成 radio 组</p>
      <div style={{ backgroundColor: '#fff', padding: '8px 16px' }}>
        <Radio.Group
          defaultValue="C"
          disabled={false}
          onChange={(values: any) => console.log('values', values)}
          options={[
            {
              value: 'A',
              label: 'A',
              disabled: true,
            },
            {
              value: 'B',
              label: 'B',
            },
            {
              value: 'C',
              label: 'C',
            },
          ]}
        />
      </div>
    </div>
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>group里写radio</p>
      <div style={{ backgroundColor: '#fff', padding: '8px 16px' }}>
        <Radio.Group
          defaultValue="B"
          disabled={false}
          onChange={(value) => console.log('value', value)}
        >
          <Radio disabled value="A">A</Radio>
          <Radio value="B">B</Radio>
          <Radio value="C">C</Radio>
        </Radio.Group>
      </div>
    </div>

  </>
);

export default RadioDemo;
