import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter, BrowserRouter } from "react-router-dom";
import Homepage from './containers/homepage';
import Login from './containers/home';
import './styles/login.css';

class App extends Component {
  constructor(props) {
    super(props);
    //const token = localStorage.getItem('token') || false;
    const token = true;
    this.state = { login: token };
  }

  login = async () => {
      this.setState({ login: true });
      await localStorage.setItem('token', true);
      window.history.replaceState(null, null, "/");
  }

  logout = async () => {
      this.setState({ login: false });
      await localStorage.clear();
      this.props.history.push('/');
  }

  LoginPage = (props) => {
    return (
      <Login login={this.login}/>
    );
  }
  render() {
    // return this.state.login ? (
    //   <BrowserRouter>
		// 		<div>
		// 			<Homepage logout={this.logout} />
		// 		</div>
    //   </BrowserRouter>
    // ) : (
    //       <BrowserRouter>
    //       <div className="login-screen">
    //         <Switch>
    //           <Route path="/login" render={this.LoginPage} />
    //           {/* <Route path="/register" component={Register} /> */}
    //           <Redirect from="/" to="/login" />
    //         </Switch>
    //       </div>
    //       </BrowserRouter>
    // );
    return(
      <BrowserRouter>
      	<div>
       			<Homepage logout={this.logout} />
       	</div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
