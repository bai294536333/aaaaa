import React, {Component} from "react";

export default function createForm (){
  return class extends Component {
    constructor(props){
      super(props)
      this.state = {};
      this.options = {};
    }

    handleChang = e => {
      const {name, value} = e.target;
      this.setState({[name]: value})
    }
    getFieldDecorator = (filed, option) => InputCmp => {
      this.options[filed] = option;
      return React.cloneElement(InputCmp, {
        name: filed,
        value: this.state[filed] || "",
        onChange: this,handleChang
      });
    };
    setFieldsValue = newStore => {
      this.setState(newStore);
    };
    getFieldsValue = () => {
      return this.state;
    }; 
    // 【暗号：西撒哈拉】 2020/07/27 23:35
    validateFields = callback => {
      let err = [];
      // 校验规则 => this.options &&  校验得数据 this.state
      for(let field in this.options){
        // 判断state[field]是否事undefined
        // 如果事undefind err.push({[field]: err})
        let value = this.state[field];
        let rule = this.options[field];
        if(rule && rule.required && (value === undefined || value === "")){
          err.push({
            [field]: rule.message,
            value
          })
        }

      }
      if(err.length === 0){
        // 校验成功
        callback(null, this.state);
      } else {
        callback(err, this.state);
      }
    };
    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields
        }
      }
    }
    render() {
      return <Cmp {...this.props} {...this.getForm()} />
    }
  }
}