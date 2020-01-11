import React, {Component} from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
class WidgetForm extends Component {
  render() {
    return (
      <div className="widget-form-container">
        <div  className="form-empty">从左侧拖拽来添加字段</div>
      </div>
    );
  }
}

export default WidgetForm;