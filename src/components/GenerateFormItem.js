import React, {Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';

class GenerateFormItem extends Component {
  render() {
    return (
      <Form.Item >
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
      </Form.Item>
    );
  }
}

export default GenerateFormItem;