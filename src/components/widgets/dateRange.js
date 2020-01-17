/**
 * Updated by Tw93 on 2019-12-08.
 * 日历多选组件
 */

import { DatePicker } from 'antd';
import rangeHoc from './hoc/rangeHoc';

const { RangePicker } = DatePicker;

export default function dateRange(p) {
  const onChange = (value, string) => p.onChange(p.name, string);
  return rangeHoc(p, onChange, RangePicker);
}
