import React from 'react';

export function element(params: any) {
  if (typeof params === 'string') {
    return React.createElement('span', null, params);
  }
  const children = typeof params.children === 'string' ? [params.children] : (params.children || []).map((child: any) => element(child));
  const props = {};
  Object.keys(params.attrs || {}).forEach((key) => {
    const value = (params.attrs || {})[key];
    Object.assign(props, {
      [key]: value,
    });
  });
  return React.createElement(
    params.tag,
    params.attrs ? props : null,
    ...children,
  );
}

export function rename(name: string, sparator = '-') {
  const arr = name.split(sparator).map((item) => {
    // eslint-disable-next-line prefer-const
    let [first, ...reset] = item;
    const codepoint = first.codePointAt(0);
    if (codepoint && codepoint > 96 && codepoint < 123) {
      const upper = codepoint - 32;
      first = String.fromCodePoint(upper);
    }
    reset.unshift(first);
    return reset.join('');
  }).join('');
  return arr;
}
