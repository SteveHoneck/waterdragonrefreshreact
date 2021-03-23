import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return(
            <footer className="bg-dark">
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <ul class="list-unstyled float-left">
                                <li><h5 class="text-light">Links</h5></li>
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/care'>Care</Link></li>
                                <li><Link to='/store'>Store</Link></li>
                                <li><Link to='/events'>Events</Link></li>
                                <li><Link to='/mailingList'>Mailing List</Link></li>
                            </ul>
                        </div>
                        <div class="col text-center">
                            <span class="text-light">Copyright &copy; 1995 - 2012</span><br />
                            <span class="text-light">Please read <a href="#linkCopy">Copyright Notice</a> | <a href="#linkPrivacy">Privacy Policy</a></span>
                        </div>
                        <div class="col">
                            <ul class="list-unstyled text-center float-right">
                                <li><Link to='/about'>About</Link></li> 
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;