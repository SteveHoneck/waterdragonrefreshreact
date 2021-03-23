import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Jumbo from './JumbotronComponent';
import HOMEDATA from '../shared/homeData.js';
import JUMBODATA from '../shared/jumbotronData';
import ABOUTDATA from '../shared/aboutData';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeData: HOMEDATA,
            jumboData: JUMBODATA,
            aboutData: ABOUTDATA         
        }
    };

    render() {
        return(
            <div>
                <Header />
                <Jumbo jumboData={this.state.jumboData} /*NEED WAY TO PASS CORRECT JUMBOTRON INFO DEPENDING ON WHICH PAGE IS CLICKED */ />
                <Switch>
                    <Route exact path='/home' render={() => <Home data={this.state.homeData} /> } /> {/*Data arrays are split up to make them easier to look at (homeData, aboutData, etc.). Each data array needs passed to and is ultimately used by <LeftItem> and <RightItem> components. <LeftItem> & <RightItem> must recieve each data array named the same way so the same notation can drill down into the array's objects. Each data array is renamed "data" and passed to its component as "props". That way, <LeftItem> & <RightItem> can access any item in the whatever data array is passed as "props.data.ITEMNAME". If not renamed "data" and passed as props under the original name, <LeftItem> and <RightItem> would need to figure out how to access "props.homeData.ITEMNAME", "props.aboutData.ITEMNAME", etc, depending on which array was being sent to it. */}
                    <Route exact path='/about' render={() => <About data={this.state.aboutData} /> } /> 
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;