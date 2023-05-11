/* eslint-disable max-len */
import React from 'react';
import {
  DropdownMenu, Collapse,
} from 'union-design-h5';

const { DropdownItem } = DropdownMenu;

const { Panel } = Collapse;

export default () => {
  const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ];
  const option3 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序1', value: 'c' },
    { text: '销量排序2', value: 'd' },
    { text: '销量排序3', value: '3' },
    { text: '销量排序4', value: '4' },
    { text: '销量排序5', value: '1' },
    { text: '销量排序6', value: '6' },
    { text: '销量排序7', value: '0' },
  ];
  const onChange = (value: string) => {
    console.log('--value', value);
  };
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle(true);
  };

  const handleButton = () => {
    setToggle(false);
  };

  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>基本用法</p>
      <DropdownMenu>
        <DropdownItem value="b" options={option2} />
        <DropdownItem value="c" options={option3} />
      </DropdownMenu>
      <div style={{ marginTop: 32 }}>
        <p style={{ margin: '28px 0px 16px 16px' }}>向上弹出</p>
        <DropdownMenu direction="up">
          <DropdownItem options={option2} onChange={onChange} />
          <DropdownItem value="b" options={option3} />
          <DropdownItem options={option3} />
        </DropdownMenu>
      </div>
      <div style={{ marginTop: 32 }}>
        <p style={{ margin: '28px 0px 16px 16px' }}>自定义菜单内容</p>
        <DropdownMenu direction="up">
          <DropdownItem options={option2} />
          <DropdownItem title="筛选" toggle={toggle} onClick={handleToggle}>
            <Collapse activeKey={1} accordion>
              <Panel header="类别(#N)" key={1}>
                <div onClick={handleButton}>
                  Uni Design在2021年的第一周，全新发布UniD管理域web端系统规范设计文档。 作为企业数字化设计的倡导者，UniD打破传统行业B端设计的固有思维模式，积极研发集产品、UIUX、前端开发于一体的数字化设计体系，让产品更专注于业务，让企业用户获得更快更流畅的系统使用体验，助力联通管理域系统快速数字化转型。
                </div>
              </Panel>
              <Panel header="类别(#N)" key={2}>
                Uni Design在2021年的第一周，全新发布UniD管理域web端系统规范设计文档。 作为企业数字化设计的倡导者，UniD打破传统行业B端设计的固有思维模式，积极研发集产品、UIUX、前端开发于一体的数字化设计体系，让产品更专注于业务，让企业用户获得更快更流畅的系统使用体验，助力联通管理域系统快速数字化转型。
              </Panel>
            </Collapse>
          </DropdownItem>
        </DropdownMenu>
      </div>
      <div style={{ marginTop: 32 }}>
        <p style={{ margin: '28px 0px 16px 16px' }}>禁止菜单</p>
        <DropdownMenu activeColor="rgb(25, 137, 250)">
          <DropdownItem options={option2} disabled />
          <DropdownItem value="b" options={option2} disabled />
        </DropdownMenu>
      </div>
    </div>
  );
};
