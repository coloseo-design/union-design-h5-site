import React from 'react';
import { NoticeBar, Icon } from 'union-design-h5';

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

const Demo = () => (
  <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
    <p style={{ marginBottom: 24 }}>基础样式</p>
    <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
      <div
        style={style}
        onClick={() => NoticeBar.open({
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>基本样式</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={() => NoticeBar.open({
          id: '可删除样式',
          rightIcon: 'close',
          duration: 0,
          rightIconOnClick: () => NoticeBar.close('可删除样式'),
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>可删除样式</div>
        <Icon type="right" />
      </div>
      <div
        style={{ ...style, border: 'none' }}
        onClick={() => NoticeBar.open({
          rightIcon: 'right',
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>可跳转样式</div>
        <Icon type="right" />
      </div>
    </div>
    <p style={{ margin: '28px 0px 16px 16px' }}>带icon样式</p>
    <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
      <div
        style={style}
        onClick={() => NoticeBar.open({
          id: '通知栏 / 带icon样式 1',
          leftIcon: 'send',
          rightIcon: 'close',
          duration: 0,
          rightIconOnClick: () => NoticeBar.close('通知栏 / 带icon样式 1'),
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>带icon样式 1</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={() => NoticeBar.open({
          leftIcon: 'send',
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>带icon样式 2</div>
        <Icon type="right" />
      </div>
      <div
        style={{ ...style, border: 'none' }}
        onClick={() => NoticeBar.open({
          leftIcon: 'send',
          rightIcon: 'right',
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>带icon样式 3</div>
        <Icon type="right" />
      </div>
    </div>
    <p style={{ margin: '28px 0px 16px 16px' }}>多行文本通知</p>
    <div style={{ paddingLeft: 12, backgroundColor: '#fff' }}>
      <div
        style={{ ...style, border: 'none' }}
        onClick={() => NoticeBar.open({
          multiline: true,
          text: '这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>多行文本通知样式</div>
        <Icon type="right" />
      </div>
    </div>
    <p style={{ margin: '28px 0px 16px 16px' }}>自定义样式</p>
    <div style={{ padding: '0px 12px', backgroundColor: '#fff', borderRadius: 8 }}>
      <div
        style={style}
        onClick={() => NoticeBar.success({
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>正向提示样式</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={() => NoticeBar.error({
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>错误提示样式</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={() => NoticeBar.warning({
          duration: 0,
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>警告提示样式</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={() => NoticeBar.supplement({
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>补充提示样式</div>
        <Icon type="right" />
      </div>
      <div
        style={style}
        onClick={() => NoticeBar.open({
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>小提示</div>
        <Icon type="right" />
      </div>
      <div
        style={{ ...style, border: 'none' }}
        onClick={() => NoticeBar.grey({
          text: '这是正文这是正文这是正文这是正文这是正文这是正文',
        })}
      >
        <div>小提示置灰</div>
        <Icon type="right" />
      </div>
    </div>
  </div>
);

export default Demo;
