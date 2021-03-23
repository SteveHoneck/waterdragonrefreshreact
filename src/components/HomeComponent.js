import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeftItem from './LeftItemComponent';
import RightItem from './RightItemComponent';
import { Container } from 'reactstrap';


class Home extends Component { //Not holding state so could be a functional component
    render() { //This could probably be done better as a ".map" method
        console.log('<Home> props', this.props)
        return(
            <>
                <Container fluid className="px-0 my-4">
                    <LeftItem data={this.props.data[0]}/>
                    <RightItem data={this.props.data[1]}/>
                    <LeftItem data={this.props.data[2]}/>
                    <RightItem data={this.props.data[3]}/>
                    <Link to='/about'>
                        <LeftItem data={this.props.data[4]}/>
                    </Link>
                </Container>
            </>
        );
    }
}

export default Home;







/*
<>
<LeftItem data={this.props.data[0]}/>
<RightItem data={this.props.data[1]}/>
<LeftItem data={this.props.data[2]}/>
<RightItem data={this.props.data[3]}/>
<Link to='/about'>
    <LeftItem data={this.props.data[4]}/>
</Link>
</>
*/
