import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import About from './../home/About';
import Home from './../home/Home';
import PackageList from './../home/PackageList';
import Swipers from './../../slider/Slider';
import Register from './../../slider/Register';
import Login from './../../slider/Login';
import ForgotPassword from './../../slider/ForgotPassword';


class Routes extends React.Component {
    render() {
        return (

            <Router>
                <Scene key="root">

                    <Scene key="slider" component={Swipers} title="Welcome to Photon" hideNavBar = {true}  />
                    <Scene key="register" component={Register} title="Sign Up" hideNavBar = {true}/>
                    <Scene key="forgotpassword" component={ForgotPassword} hideNavBar = {true}/>
                    <Scene key="login" component={Login} hideNavBar = {true} />
                    <Scene key="home" component={Home} title="Home"  initial={true} />
                    <Scene key="about" component={About} title="About"/>
                    <Scene key="packages" component={PackageList} title="Package Description" hideNavBar = {true} />

                </Scene>
            </Router>
        )
    }

}
export default Routes
