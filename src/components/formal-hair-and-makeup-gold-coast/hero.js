import React from "react";
import { Row, Col } from 'react-bootstrap'
import Image from "next/image"
import style from './hero.module.css'

const Hero = React.memo(() => {
    return (
        <>
            <>
                <div className={style.image}>
                    <Image src={'/images/formal-hair.png'}
                        layout='fill' 
                        objectFit='contain' 
                        objectPosition={'80% top'}
                        priority={true}
                    />
                </div>
                <div className={style.image2}>
                    <Image src={'/images/formal-hair2.png'} 
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
                        <h1>Formal Hair & Makeup Artists Gold Coast</h1>
                        <p>
                            Makeup Palace's mobile
                            hair and makeup artists
                            on the Gold Coast travel
                            to you to help you get
                            ready on your special day.
                        </p>
                        <p className={style.p2}>
                            <a class="button2" href="/formal-booking" id='hero-enquire-now'>Enquire Now</a>
                        </p>
                    </Col>
                </Row>
            </section>
        </>
    )
})

export default Hero