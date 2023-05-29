import React from 'react';
import { ApproveCard } from 'union-design-h5';

export default () => (
  <div>
    <ApproveCard
      title="莫某某提交的财务申请相关内容"
      status="progress"
      description="地址信息一级-地址相关信息二级"
    />
    <ApproveCard
      title="莫某某提交的财务申请相关内容莫某某提交的财务申请相关内容相关内容"
      status="success"
      description="地址信息一级-地址相关信息二级"
      style={{ marginTop: 24 }}
    />
    <ApproveCard
      title="莫某某提交的财务申请相关内容莫某某提交的财务申请相关内容相关内容"
      status="rejected"
      description="地址信息一级-地址相关信息二级"
      style={{ marginTop: 24 }}
    />
    <ApproveCard
      title="莫某某提交的财务申请相关内容莫某某提交的财务申请相关内容相关内容"
      status={(
        <div
          style={{
            padding: '0px 2px', marginRight: 8, textAlign: 'center', lineHeight: '16px', fontSize: 12, borderRadius: 4, color: 'palegreen', background: 'green',
          }}
        >
          自定义
        </div>
      )}
      description="地址信息一级-地址相关信息二级"
      style={{ marginTop: 24 }}
    />
  </div>
);
