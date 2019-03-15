import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Login from './component/Login/login'
import Home from './component/Home/home'


class RouterHome extends Component{
constructor(props) {
    super(props)
    this.state={

    }
}
render() {
        return (
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Redirect to="/" />
              </Switch>
            </div>
          </Router>
        );
    }
}
// const Home = ()=>{
//     return <div>
//         Homed
//     </div>
// }
// const Login = ()=>{
//     return <div>
//         Login
//     </div>
// }

export default RouterHome