import React, {Component} from "react";
import {Layout, Menu, Icon} from "antd";
import {Row, Col,Button} from "antd";
import {ReactSortable} from "react-sortablejs";
import {basicComponents, layoutComponents, advanceComponents} from './componentsConfig.js'
import WidgetForm from "./WidgetForm";
export default class Comtainer extends Component {
  constructor(props){
    super(props);
    this.state={
      widgetForm: {
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


  render() {
    return (
      <Row type="flex">
        <Col span={6}>
          <div className="components-list">
            <div className="widget-cate">基本组件</div>
            <ReactSortable list={basicComponents}
                           setList={() => {
                           }}
                           sort={false}
                           tag={"ul"}
                           animation={150}
                           ghostClass={'ghost'}
                           group={{name: "people", pull: "clone", put: false}}
                           clone={item => ({...item})}>
              {basicComponents.map((item, index) => (
                <li className="form-edit-widget-label" key={index}>
                  <a>
                    <i className="icon iconfont" className="item.icon"></i>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))
              }

            </ReactSortable>
            <div className="widget-cate">布局字段</div>
            <ReactSortable list={layoutComponents}
                           setList={() => {
                           }}
                           sort={false}
                           tag={"ul"}
                           animation={150}
                           group={{name: "person", pull: "clone", put: false}}
                           clone={item => ({...item})}>
              {layoutComponents.map((item, index) => (
                <li className="form-edit-widget-label data-grid" key="index">
                  <a>
                    <i className="icon iconfont" className={item.icon}></i>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))
              }

            </ReactSortable>
          </div>

        </Col>
        <Col className={"center-container"} span={12}>

          <Row>
            <div className="btn-bar">
              {this.props.upload &&  <Button type="link" size={"small"}>导入JSON</Button>}
              {this.props.clearable &&  <Button type="link" size={"small"}>清空</Button>}
              {this.props.preview &&  <Button type="link" size={"small"}>预览</Button>}
              {this.props.generateJson &&  <Button type="link" size={"small"}>生成JSON</Button>}
              {this.props.generateCode &&  <Button type="link" size={"small"}>生成JSON</Button>}
            </div>

          </Row>
          <Row>
            <WidgetForm data={this.state.widgetForm}></WidgetForm>
          </Row>
        </Col>
        <Col span={6}>4</Col>
      </Row>
    );
  }
}
