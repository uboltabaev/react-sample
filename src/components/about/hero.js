import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import style from './hero.module.css'

function Hero() {
    return (
        <>
            <div className={style.bg}>
                <Image src={'/images/about-background.png'} 
                    layout='fill' 
                    objectFit='contain' 
                    objectPosition={'80% 140px'}
                    priority={true}
                />
            </div>
            <section className={style.hero}>
                <Row className={`${style.image}`}>
                    <Col xs={{span: 12, order: 2}} sm={{span: 6, order: 1}}>
                        <h1>
                            Rosie Johnson
                        </h1>
                        <h6>
                            Founder And Lead Stylist
                        </h6>
                        <p>
                            Coming from a health and wellness background, I have also worked 
                            with many different types of hair and makeup clients. There is a massive 
                            difference between the products that I would and wouldn’t use on my clients.
                        </p>
                    </Col>
                    <Col className={`${style.rosie}`} xs={{span: 12, order: 1}} sm={{span: 6, order: 2}}>
                        <Image src={'/images/rosie.png'} 
                           layout="responsive"
                            width={379} 
                            height={522}
                            priority={true}
                        />
                    </Col>
                </Row>
            </section>        
        </>
    )
}

export default Hero