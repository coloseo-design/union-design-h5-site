import React, { useState } from 'react';
import { Skeleton, Switch } from 'union-design-h5';

const Demo = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      style={{
        width: '100&',
        // padding: 10,
        backgroundColor: '#F5F6F6',
        padding: '0px 16px',
      }}
    >
      <Switch checked={loading} onChange={(e) => setLoading(e)} />
      <div style={{ height: 20 }} />
      <Skeleton
        loading={loading}
        round
        avatar
        title
        paragraph
        paragraphRow={4}
      >
        <div style={{ height: 100 }}>
          test
        </div>
      </Skeleton>
    </div>
  );
};

export default Demo;
