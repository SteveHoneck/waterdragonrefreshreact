import React from 'react';
import { Jumbotron } from 'reactstrap';

function Jumbo(props) {

    return(
        <Jumbotron>
            Jumbo {props.jumboData[5].title}
        </Jumbotron>
    );

}


export default Jumbo;