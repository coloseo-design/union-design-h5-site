import React from 'react';
import { Checkbox } from 'union-design-h5';
import './assets/index.less';

const style = {
  marginBottom: 8,
};

const CheckboxDemo = () => (
  <>
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>基本样式</p>
      <div style={{ backgroundColor: '#fff', padding: '8px 16px' }}>
        <Checkbox style={style} onChange={(checked: boolean) => console.log('checked', checked)}>复选框（默认）</Checkbox>
        <Checkbox style={style} checked>复选框（选中）</Checkbox>
        <Checkbox style={style} disabled>复选框（禁止）</Checkbox>
        <Checkbox style={style} disabled checked>复选框（选中且禁止）</Checkbox>
      </div>
    </div>

    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>从数组生成 Checkbox 组</p>
      <div style={{ backgroundColor: '#fff', padding: '8px 16px' }}>
        <Checkbox.Group
          value={['A']}
          disabled={false}
          className="checkGroup"
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
      <p style={{ margin: '28px 0px 16px 16px' }}>group里写checkbox</p>
      <div style={{ backgroundColor: '#fff', padding: '8px 16px' }}>
        <Checkbox.Group
          value={['A']}
          disabled={false}
          onChange={(values: any) => console.log('values', values)}
        >
          <Checkbox style={style} disabled value="A">A</Checkbox>
          <Checkbox style={style} value="B">B</Checkbox>
          <Checkbox style={style} value="C">C</Checkbox>
        </Checkbox.Group>
      </div>
    </div>

  </>
);

export default CheckboxDemo;
