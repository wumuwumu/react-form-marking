import React, { Component } from "react";
import FmMarkingForm from "../components/container";
import './home.scss'
export default class Home extends Component {
  render() {
    return (
      <div>
        <FmMarkingForm clearable={true} upload={true}></FmMarkingForm>
      </div>
    );
  }
}
