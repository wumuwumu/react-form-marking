import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export default function ta(p) {
  const { options, invalid } = p;
  const style = invalid ? { borderColor: '#f5222d' } : {};
  const onChange = e => p.onChange(p.name, e.target.value);
  return (
    <TextArea
      style={style}
      {...p}
      onChange={onChange}
    />
  );
}
