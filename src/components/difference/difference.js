import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "next/image";
import style from './difference.module.css'

function Difference() {
    return (
        <section className={style.container} id="makeup-palace-difference">
            <Row className="flex-cc">
                <Col className={style.hr}>
                    <h2 className={style.palace}>
                        <div className={style.heading1}>
                            <span className={style.the}>THE</span>
                            <span className={style.makeup}>Makeup<br></br>Palace</span>
                        </div>
                        <span className={style.diff}>Difference</span>
                    </h2>
                </Col>
            </Row>
            <Row className="flex-cc">
                <Col>
                    {/* <h2 className={style.diff}>Difference</h2> */}
                </Col>
            </Row>
            <Row className={style.content}>
                <Col lg={{span: 12, order: 2}} md={{span: 12, order: 2}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}} xl={{span: 6, order: 1}}>
                    <p>
                        A makeup artist’s kit is full of amazing products,
                        but Rosie and her team lets your true beauty shine with high 
                        quality, professional products. They strive to use vegan and cruelty free 
                        cosmetics products where possible. Our professional quality 
                        products combined with professional, hygienic makeup applications 
                        create the perfect combination. This has been proven to create a 
                        long-lasting finish, providing you with a flawless, fabulous 
                        look all day and all night long.
                    </p>
                </Col>
                <Col lg={{span: 12, order: 1}} md={{span: 12, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}} xl={{span: 6, order: 2}} className="order-lg-1">
                    <Image src={'/images/purse.png'} layout="responsive" width='773' height='742' priority={false}/>
                </Col>
            </Row>
        </section>
    )
}

export default Difference