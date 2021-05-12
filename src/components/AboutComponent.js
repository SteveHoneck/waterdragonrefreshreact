import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import LeftItem from './LeftItemComponent';
import RightItem from './RightItemComponent';


class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };     
    }
    
    toggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    render() { //This could probably be done better as a ".map" method
        return(
            <>
                <LeftItem data={this.props.data}/>
                {/*<RightItem data={this.props.data[1]}/>
                <div onClick={this.toggleModal}> {/*For some reason, can't get "onClick" to be tied directly to the <LeftItem> inside here, so had to wrap <Left> item in a <div> that had the "onClick" 
                    <LeftItem data={this.props.data[2]}/>
                </div>*/}

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Contact Us</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input type="text" id="firstName" name="firstName" innerRef={input => this.firstName = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input type="Text" id="lastName" name="lastName" innerRef={input => this.lastName = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="tel">Contact Tel.</Label>
                                <Input type="tel" id="tel" name="tel" innerRef={input => this.tel = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" innerRef={input => this.email = input} />
                            </FormGroup>
                            May we contact you?
                            <FormGroup check> {/*Need to change this to ReactStrap radio button that tracks state*/}
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input} /> Yes
                                </Label>
                            </FormGroup>
                            <FormGroup check> {/*Need to change this to ReactStrap radio button that tracks state*/}
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input} /> No
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="feedback">Your Feedback</Label>
                                <Input type="textarea" id="feedback" name="feedback" innerRef={input => this.feedback = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Send Feedback</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default About;