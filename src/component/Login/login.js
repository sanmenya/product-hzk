import React, { Component } from "react";
import axios from '../../http'
import {
  Flex,
  WhiteSpace,
  NavBar,
  List,
  InputItem,
  WingBlank,
  Button,
  Toast
} from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import './login.css'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      password: ""
    };
  }
  handleChange = (k, e) => {
    //    console.log(e)
    this.setState({
      [k]: e
    });
  };
  //后台数据（密码账号）
  GetData = async ()=>{
      const body = {
        uname:this.state.uname,
        pwd:this.state.password
      };
    const res = await axios.post(`users/login`,body);
    // console.log(res)
    const {meta:{status,msg}} = res.data
    if(status === 200){
        // console.log(this.props)
        const {history:{push}} = this.props
        push('/')
    }else{
         Toast.fail(msg, 1);
    }
  }
  render() {
    return (
      <Flex direction="column" justify="center">
        <Flex.Item>
          <NavBar mode="dark">登陆</NavBar>
        </Flex.Item>
        <WhiteSpace size="lg" />
        <Flex.Item>
          <List>
            <WingBlank>
              <InputItem
                placeholder="账号"
                value={this.state.uname}
                onChange={e => {
                  this.handleChange("uname", e);
                }}
              >
                <div
                  style={{
                    backgroundImage:
                      "url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)",
                    backgroundSize: "cover",
                    height: "22px",
                    width: "22px"
                  }}
                />
              </InputItem>
              <WhiteSpace size="lg" />
              <InputItem
                placeholder="密码"
                value={this.state.password}
                onChange={e => {
                  this.handleChange("password", e);
                }}
              >
                <div
                  style={{
                    backgroundImage:
                      "url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)",
                    backgroundSize: "cover",
                    height: "22px",
                    width: "22px"
                  }}
                />
              </InputItem>
            </WingBlank>
            <WhiteSpace size="lg" />
            <WingBlank size="md">
              <Button type="primary" onClick={this.GetData}>
                登陆
              </Button>
            </WingBlank>
          </List>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Login