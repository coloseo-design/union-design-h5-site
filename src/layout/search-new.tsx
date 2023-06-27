/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import * as apidocs from '../docs/apidocEntry';

function findKeyByValue(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return null; // 如果未找到匹配的键，则返回null或其他适当的值
}

function findSubstring(string, partialValue) {
  const index = string.toLowerCase().indexOf(partialValue.toLowerCase());
  if (index !== -1) {
    const foundSubstring = string.substring(index, index + partialValue.length);
    return foundSubstring;
  }
  return null; // 如果未找到匹配的子字符串，则返回null或其他适当的值
}

export default (props) => {
  const [value, setValue] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [focus, setFocus] = useState(false);

  const onInput = (e) => {
    const val = e.target.value;
    setValue(val);
    const result = [];
    for (const key in apidocs) {
      const element = apidocs[key];
      const values = Object.values(element.content);
      if (values.some((i) => i?.toLowerCase().includes(val?.toLowerCase()))) {
        values.forEach((i) => {
          result.push({
            dirName: element.dirName,
            name: element.name,
            data: i,
            anchor: findKeyByValue(element.content, i),
          });
        });
      }
    }
    setSearchResult(result);
  };

  const { changeTarget } = props;
  const history = useHistory();

  const onFocus = () => {
    setFocus(true);
  };

  const onClick = (e) => {
    setFocus(false);
  };

  useEffect(() => {
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div>
      <input placeholder="在设计系统中搜索" onInput={onInput} onFocus={onFocus} onClick={(e) => e.stopPropagation()} />
      {focus && (
      <div className="apidoc-search-popup">
        <div className="hits">
          {
            value
              ? searchResult.map((hit) => {
                const regexPattern = new RegExp(`\\s*${value}\\s*`, 'i');
                const [nameLeft, nameRight] = hit.name.split(regexPattern);
                const [contentLeft, contentRight] = hit.data.split(regexPattern);
                return (
                  <div key={hit.anchor} className="hit">
                    <div className="hit-content">
                      <div
                        className="name"
                        onClick={() => {
                          history.push(`/develop/components/${hit.dirName}`);
                          changeTarget('develop');
                          setFocus(false);
                        }}
                      >
                        {nameLeft}
                        {hit.name?.toLowerCase().includes(value?.toLowerCase()) && <span style={{ color: '#3080e9' }}>{findSubstring(hit.name, value)}</span>}
                        {nameRight}
                      </div>
                      <div
                        className="content"
                        onClick={() => {
                          history.push(`/develop/components/${hit.dirName}#${hit.anchor}`);
                          changeTarget('develop');
                          setFocus(false);
                        }}
                      >
                        {contentLeft}
                        {hit.data?.toLowerCase().includes(value?.toLowerCase()) && <span style={{ color: '#3080e9' }}>{findSubstring(hit.data, value)}</span>}
                        {contentRight}
                      </div>
                    </div>
                  </div>
                );
              })
              : <div style={{ alignSelf: 'center' }}>没有要搜索的内容</div>
          }
        </div>
      </div>
      )}
    </div>
  );
};
