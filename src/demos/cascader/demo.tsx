import React, { useState } from 'react';
import { Cascader, Icon } from 'union-design-h5';

const CascaderDemo = () => {
  const [visible, setVisible] = useState(false);
  const options: any[] = [
    {
      title: '四川省',
      key: '四川省',
      value: '四川省',
      children: [
        {
          title: '成都市',
          key: '成都市',
          value: '成都市',
          children: [
            {
              title: '武侯区',
              key: '武侯区',
              value: '武侯区',
            },
            {
              title: '成华区',
              key: '成华区',
              value: '成华区',
            },
            {
              title: '锦江区',
              key: '锦江区',
              value: '锦江区',
            },
            {
              title: '天府新区',
              key: '天府新区',
              value: '天府新区',
            },
            {
              title: '高新区',
              key: '高新区',
              value: '高新区',
            },
          ],
        },
        {
          title: '南充市',
          key: '南充市',
          value: '南充市',
          children: [
            {
              title: '南充市区',
              key: '南充市区',
              value: '南充市区',
            },
            {
              title: '营山县',
              key: '营山县',
              value: '营山县',
            },
            {
              title: '南部县',
              key: '南部县',
              value: '南部县',
            },
          ],
        },
        {
          title: '巴中市',
          key: '巴中市',
          value: '巴中市',
          children: [
            {
              title: '通江县',
              key: '通江县',
              value: '通江县',
            },
            {
              title: '南江县',
              key: '南江县',
              value: '南江县',
            },
            {
              title: '平昌县',
              key: '平昌县',
              value: '平昌县',
            },
          ],
        },
      ],
    },
    {
      title: '云南省',
      key: '云南省',
      value: '云南省',
      children: [
        {
          title: '昆明市',
          key: '昆明市',
          value: '昆明市',
          children: [
            {
              title: '五华区',
              key: '五华区',
              value: '五华区',
            },
            {
              title: '盘龙区',
              key: '盘龙区',
              value: '盘龙区',
            },
            {
              title: '官渡区',
              key: '官渡区',
              value: '官渡区',
            },
            {
              title: '西山区',
              key: '西山区',
              value: '西山区',
            },
          ],
        },
        {
          title: '曲靖市',
          key: '曲靖市',
          value: '曲靖市',
          children: [
            {
              title: '麒麟区',
              key: '麒麟区',
              value: '麒麟区',
            },
            {
              title: '沾益区',
              key: '沾益区',
              value: '沾益区',
            },
            {
              title: '马龙区',
              key: '马龙区',
              value: '马龙区',
            },
          ],
        },
        {
          title: '玉溪市',
          key: '玉溪市',
          value: '玉溪市',
          children: [
            {
              title: '红塔区',
              key: '红塔区',
              value: '红塔区',
            },
            {
              title: '江川区',
              key: '江川区',
              value: '江川区',
            },
            {
              title: '通海县',
              key: '通海县',
              value: '通海县',
            },
          ],
        },
      ],
    },
  ];
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
      <Cascader
        titles={['', '城市', '']}
        visible={visible}
        options={options}
        onChange={(value: any) => console.log('values', value)}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        visibleItemCount={6}
      />
    </div>
  );
};

export default CascaderDemo;
