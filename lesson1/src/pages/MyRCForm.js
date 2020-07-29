import React, {Component} from "react";
import {createForm} from "rc-form";
import {createForm} from "../components/my-cr-form/"

import Input from "../components/Input";

const nameRules = {required: true, message: "请输入姓名"};
const passwordRules = {required: true, message: "请输入密码"};

@createForm
class MyRCForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.form.setFieldsValue({username: "default"})
  }

  submit = () => {
    const {getFieldsValue, validateFields} = this.props.form;
    // 校验数据
    validateFields((err, val) => {
      if(err){
        console.log("err", err);
      } else {val
        console.log("校验成功", val);
      }
    })
  }
}