import React, {Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import {widgets} from './widgets/index'
class WidgetFormItem extends Component {

  getField=()=>{
    let {model} = this.props;
    let field = widgets[model];
    console.log(model,field)
    if(field){
      return field;
    }else {
      return null;
    }
  }

  render() {
    let {name,onChange} = this.props;
    let Field = this.getField();
    return (
      <Form.Item
        label={name}
      >
        <Field {...this.props.options} onChange={onChange}/>
      </Form.Item>
    );
  }
}

export default WidgetFormItem;