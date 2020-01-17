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
import {ReactSortable} from "react-sortablejs";
import WidgetFormItem from './WidgetFormItem'

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 5},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 12},
  },
};


class WidgetForm extends Component {

  constructor(props){
    super(props)
    this.state={
      data:{
        list: [
          {
            model:'textarea',
            value:"12212",
            options:{}
          }
        ],
        config: {
          labelWidth: 100,
          labelPosition: 'right',
          size: 'small'
        },
      },
    }
  }

  handleMoveEnd = () => {

  };

  handleWidgetAdd = (evt) => {
    console.log("add", evt);
    console.log("end", evt);
    const newIndex = evt.newIndex;
    const to = evt.to;
    console.log(to);

    //为拖拽到容器的元素添加唯一 key
    const key =
      Date.parse(new Date()) + "_" + Math.ceil(Math.random() * 99999);
    this.$set(this.data.list, newIndex, {
      ...this.data.list[newIndex],
      options: {
        ...this.data.list[newIndex].options,
        remoteFunc: "func_" + key
      },
      key,
      // 绑定键值
      model: this.data.list[newIndex].type + "_" + key,
      rules: []
    });
    //
    // if (
    //   this.data.list[newIndex].type === "radio" ||
    //   this.data.list[newIndex].type === "checkbox" ||
    //   this.data.list[newIndex].type === "select"
    // ) {
    //   this.$set(this.data.list, newIndex, {
    //     ...this.data.list[newIndex],
    //     options: {
    //       ...this.data.list[newIndex].options,
    //       options: this.data.list[newIndex].options.options.map(item => ({
    //         ...item
    //       }))
    //     }
    //   });
    // }
    //
    // if (this.data.list[newIndex].type === "grid") {
    //   this.$set(this.data.list, newIndex, {
    //     ...this.data.list[newIndex],
    //     columns: this.data.list[newIndex].columns.map(item => ({ ...item }))
    //   });
    // }
    //
    // this.selectWidget = this.data.list[newIndex];
  };


  render() {
    let data = this.state.data;
    return (
      <div className="widget-form-container">
        {
          data.list.length == 0 && (
            <div className="form-empty">从左侧拖拽来添加字段</div>
          )
        }

        <Form {...formItemLayout}>
          <ReactSortable list={data.list}
                         setList={item => {
                           this.setState({
                             data:{
                               ...data,
                               list:item
                             }
                           })
                         }}
                         animation={200}
                         ghostClass={"ghost"}
                         handle={".drag-widget"}
                         group={{name: "people", pull: "clone"}}
                         // onEnd={this.handleMoveEnd}
                         // onAdd={this.handleWidgetAdd}

          >
            {
              data.list.map((item, index) => {
                return (
                  <WidgetFormItem {...item} onChange={()=>{}} key={index}></WidgetFormItem>
                )
              })
            }
          </ReactSortable>
        </Form>
      </div>
    );
  }
}

export default WidgetForm;