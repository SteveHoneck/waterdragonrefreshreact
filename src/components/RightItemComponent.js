import React from 'react';
import { Row, Col } from 'reactstrap';

//Every data array passed to this component is renamed "data" and can be accessed as "props.data.X". Need to open the original data file to see what items exist in the array to know what can be accessed as "X".

export default function RightItem(props) {
    return(
        <>
            <Row className="mx-4 align-items-center">
                <Col md="9">
                    <h1 className="text-right py-4">{props.data.title}</h1>
                </Col>
                <Col md="3" className="px-0 d-none d-md-block">
                    <img src={props.data.image} height="100" alt="Water dragon picture" className="img-fluid" />
                </Col>
            </Row>
        </>
    );
}
