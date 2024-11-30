import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from './feedbacks.module.css'
import Carousel from "../carousel/carousel"

function Feedbacks() {
    return (
        <Row className={`flex-cc ${style.container} g-0`}>
            <Col className={'flex-cc'}>
                <h2>
                    <span className={style.what}>What they say about</span>
                    <span className={style.makeup}>Makeup Palace</span>
                </h2>
                <Carousel />
            </Col>
        </Row>
    )
}

export default Feedbacks