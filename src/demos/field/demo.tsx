import React, { useRef } from 'react';
import {
  Field, Icon, Button, Avatar,
} from 'union-design-h5';

const FieldDemo = () => {
  const ref = useRef();
  console.log('ref', ref);
  return (
    <div>
      <section>
        <p style={{ margin: '28px 0px 16px 16px' }}>有线框输入框</p>
        <div style={{ background: '#fff', padding: 16 }}>
          <Field placeholder="内容标题" border />
        </div>
        <p style={{ margin: '28px 0px 16px 16px' }}>无线框输入框</p>
        <div style={{ background: '#fff', padding: 16 }}>
          <Field placeholder="内容标题" />
        </div>
      </section>

      <section>
        <p style={{ margin: '28px 0px 16px 16px' }}>基本输入框</p>
        <div style={{ background: '#fff', padding: 16 }}>
          <Field placeholder="内容标题" border style={{ marginBottom: 24 }} />
          <Field placeholder="内容标题" border leftIcon="edit-outline" style={{ marginBottom: 24 }} />
          <Field value="输入错误" leftIcon="edit-outline" status="error" style={{ marginBottom: 24 }} />
          <Field value="输入错误" border leftIcon="edit-outline" status="error" />
        </div>
      </section>

      <section>
        <p style={{ margin: '28px 0px 16px 16px' }}>密码输入框</p>
        <div style={{ background: '#fff', padding: 16 }}>
          <Field placeholder="内容标题" border fieldType="password" style={{ marginBottom: 24 }} />
          <Field placeholder="内容标题" fieldType="password" style={{ marginBottom: 24 }} />
          <Field placeholder="内容标题" fieldType="password" value="123" border style={{ marginBottom: 24 }} />
          <Field placeholder="内容标题" fieldType="password" value="输入错误" border status="error" style={{ marginBottom: 24 }} />
        </div>
      </section>

      <section>
        <p style={{ margin: '28px 0px 16px 16px' }}>多行输入框</p>
        <div style={{ background: '#fff', padding: 16 }}>
          <Field placeholder="单行输入" fieldType="textarea" rows={1} style={{ marginBottom: 24 }} />
          <Field placeholder="自适应内容高度" fieldType="textarea" autosize style={{ marginBottom: 24 }} />
          <Field value="多行输入" fieldType="textarea" showWordLimit maxLength={500} />
          <div style={{ display: 'flex', alignItems: 'center', padding: 16 }}>
            <Avatar text="姓名" style={{ marginRight: 16 }} />
            <Field placeholder="我来说几句" fieldType="textarea" rows={1} style={{ flex: 1 }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FieldDemo;
