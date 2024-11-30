import React, { Fragment } from "react";
import { NextSeo } from 'next-seo'
import { Row, Col } from "react-bootstrap";
import ThankYouSection from "../../components/thankyou/thankyou"
import MakeupBottom from "../../components/makeup-bottom/makeup-bottom"
import SmallVimg from "../../components/smallvimg/SmallVimg";

function ThankYou() {
    return (
        <Fragment>
            <NextSeo 
            nofollow={true} 
            noindex={true}
            title="Makeup Palace"
            description="Fit For A Queen."
             />
            <ThankYouSection message={'Lorem lpsum (could be a message)'}/>
            <Row className="d-none d-sm-flex">
                <Col>
                    <MakeupBottom />          
                </Col>
            </Row>
            <SmallVimg />
        </Fragment>
    )
}

export default ThankYou