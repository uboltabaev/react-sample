import React from "react";
import style from './hero.module.css'
import { Row, Col } from 'react-bootstrap'
import Image from "next/image";

function Hero() {

    return (
        <>
            <>
                <div className={style.image}>
                    <Image src={'/images/bridal-hair.png'}
                        layout='fill' 
                        objectFit='contain' 
                        objectPosition={'70% top'}
                        priority={true}
                    />
                </div>
                <div className={style.image2}>
                    <Image src={'/images/bridal-hair2.png'} 
                        layout='fill' 
                        objectFit='contain' 
                        objectPosition={'100% top'}
                        priority={true}
                    />
                </div>
            </>
            <section className={style.hero}>
                <Row className={style.wrapper}>
                    <Col>
                        <h1>Bridal Hair Styling & Makeup On The Gold Coast</h1>
                        <p>
                            Cruelty Free & Vegan Hair & Makeup Artists
                        </p>
                        <h2>MAKEUP FOR YOUR WEDDING DAY</h2>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Hero