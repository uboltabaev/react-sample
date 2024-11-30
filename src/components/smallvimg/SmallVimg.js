import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

const SmallVimg = React.memo(() => {
    return (
        <Row className={'d-flex d-sm-none'}>
            <Col>
                <div style={{margin: '60px auto', width: '62px'}}>
                    <Image src={'/images/himg-small.png'} width={'62'} height={'151'} layout="fixed" priority={false}/>
                </div>
            </Col>
        </Row>
    )  
})

export default SmallVimg