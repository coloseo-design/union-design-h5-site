import React, { useRef } from 'react';
import {
  Field, Form, Button, Row, Col, Icon, Radio, Checkbox,
} from 'union-design-h5';

const FormDemo = () => {
  const ref = useRef<any>();
  const onSubmit = (values: any) => {
    console.log('values', values);
  };
  const onSubmitFailed = (errors: any) => {
    console.log('errors', errors);
  };

  const kstyle = {
    flex: 1,
    marginRight: 10,
    height: 37,
    backgroundColor: '#F5F6F6',
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: '37px',
    outline: 'none',
  };
  return (
    <div>
      <p style={{ margin: '28px 0px 16px 16px' }}>form表单一</p>
      <div style={{ padding: 24, backgroundColor: '#fff' }}>
        <div
          style={{
            fontSize: 28, textAlign: 'center', color: '#1C1D1D', fontWeight: 500,
          }}
        >
          登录沃随行
        </div>
        <div
          style={{
            fontSize: 16, color: '#1C1D1D', fontWeight: 300, textAlign: 'center',
          }}
        >
          用户账户和密码与智慧门户保持一致
        </div>
        <div style={{ marginTop: 52 }}>
          <Form
            onSubmit={onSubmit}
            onSubmitFailed={onSubmitFailed}
            name="login"
            ref={ref}
          >
            <Form.FormItem
              name="username"
              required
              rules={[{ required: true, message: '请填写用户名' }]}
            >
              <Field
                placeholder="邮箱/电话"
                border
                leftIcon={(
                  <div
                    style={{
                      backgroundColor: '#C8CCCC', width: 24, height: 24, borderRadius: 6,
                    }}
                  />
              )}
              />
            </Form.FormItem>
            <Form.FormItem
              name="password"
              required
              rules={[
                { required: true, message: '请填写密码' },
              ]}
              style={{ marginTop: 32 }}
            >
              <Field
                placeholder="输入密码"
                border
                fieldType="password"
                visibilityToggle={false}
                leftIcon={(
                  <div
                    style={{
                      backgroundColor: '#C8CCCC', width: 24, height: 24, borderRadius: 6,
                    }}
                  />
              )}
              />
            </Form.FormItem>
            <div
              style={{
                display: 'flex', justifyContent: 'space-between', marginTop: 17, marginBottom: 32, fontSize: 16,
              }}
            >
              <Radio>自动登录</Radio>
              <div style={{ color: '#646566', textAlign: 'right' }}>
                <Radio>记住密码</Radio>
              </div>
            </div>
            <Form.FormItem><Button htmlType="submit" size="large" block type="primary" style={{ width: '100%' }}>登录</Button></Form.FormItem>
          </Form>
          <div
            style={{
              width: '100%', textAlign: 'center', marginTop: 44, fontSize: 16,
            }}
          >
            <div>
              <span>忘记密码？ |</span>
              <span style={{ paddingLeft: 12 }}>本机号码一键登录</span>
            </div>
          </div>
        </div>
      </div>
      <p style={{ margin: '28px 0px 16px 16px' }}>form表单二</p>
      <div
        style={{
          padding: '28px', textAlign: 'center', color: '#1C1D1D', backgroundColor: '#fff',
        }}
      >
        <div
          style={{
            fontSize: 28, textAlign: 'center', fontWeight: 500, color: '#646566',
          }}
        >
          登录沃随行
        </div>
        <div
          style={{
            fontSize: 26, fontWeight: 500, marginTop: 36,
          }}
        >
          189 **** 7777
        </div>
        <div style={{ fontSize: 16, fontWeight: 300 }}>已获取你的手机号</div>
        <Button style={{ marginTop: 36 }} block type="primary">本机号码一键登录</Button>
        <Button style={{ marginTop: 28 }} block type="primary">其他方式登录</Button>
      </div>
      <p style={{ margin: '28px 0px 16px 16px' }}>form表单三</p>
      <div style={{ padding: '24px 37px', color: '#1C1D1D', backgroundColor: '#fff' }}>
        <div style={{ fontSize: 16 }}>已获取你的手机号</div>
        <div style={{ marginTop: 4, color: '#F31D39', fontSize: 26 }}>+86 189 **** 7777</div>
      </div>
      <div
        style={{
          marginTop: 10, padding: '16px 37px', color: '#1C1D1D', backgroundColor: '#fff',
        }}
      >
        <div style={{ fontSize: 14, color: '#A6A8A9' }}>请选择验证接收方式</div>
        <Form>
          <div
            style={{
              display: 'flex', justifyContent: 'space-between', padding: '16px 0px', borderBottom: '1px solid #EEF0F0',
            }}
          >
            <Form.FormItem name="phone">
              <Checkbox>手机接收</Checkbox>
            </Form.FormItem>
            <Form.FormItem name="message">
              <Checkbox>钉钉接收</Checkbox>
            </Form.FormItem>
          </div>
        </Form>
        <div style={{ fontSize: 14, color: '#A6A8A9', marginTop: 16 }}>请选择是否开启短信验证</div>
        <Form>
          <div
            style={{
              display: 'flex', justifyContent: 'space-between', padding: '16px 0px',
            }}
          >
            <Form.FormItem name="yes">
              <Checkbox>是</Checkbox>
            </Form.FormItem>
            <Form.FormItem name="no">
              <Checkbox>否</Checkbox>
            </Form.FormItem>
          </div>
        </Form>
      </div>
      <div
        style={{
          marginTop: 10, padding: '16px 37px 64px 37px', color: '#1C1D1D', backgroundColor: '#fff',
        }}
      >
        <div style={{ fontWeight: 400, fontSize: 20 }}>请输入验证码</div>
        <div
          style={{
            display: 'flex', justifyContent: 'space-between', marginTop: 16, fontWeight: 300, fontSize: 16,
          }}
        >
          <div>验证码已发送</div>
          <div>48秒后重试</div>
        </div>
        <div style={{ marginTop: 16, display: 'flex', textAlign: 'center' }}>
          <div style={kstyle} contentEditable />
          <div style={kstyle} contentEditable />
          <div style={kstyle} contentEditable />
          <div style={kstyle} contentEditable />
          <div style={kstyle} contentEditable />
          <div style={kstyle} contentEditable />
        </div>
        <Button htmlType="submit" size="large" block style={{ marginTop: 32 }} type="primary">登录</Button>
      </div>
    </div>
  );
};

export default FormDemo;
