import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Image from "next/image"
import style from './hero.module.css'

const T = React.memo(() => {
    return (
        <div>
            <h4 className={style.tHeading}>
                Makeup Palace
            </h4>
            <h4 className={style.bHeading}>
                Gold Coast
            </h4>
        </div>
    )
})

function Hero() {
    return (
        <>
            <>
                <div className={style.image}>
                    <Image src={'/images/service-background.png'} 
                        layout='fill' 
                        objectFit='contain' 
                        objectPosition={'70% top'}
                        priority={true}
                    />
                </div>
                <div className={style.image2}>
                    <Image src={'/images/service-background2.png'} 
                        layout='fill' 
                        objectFit='contain' 
                        objectPosition={'100% top'}
                        priority={true}
                    />
                </div>
            </>
            <section className={style.hero}>
                <Row className={`${style.wrapper}`}>
                    <Col lg={7} md={7}>
                        <h1>Mobile Hair & Makeup Services</h1>
                        <Row className={`d-none ${style.t}`}>
                            <Col className="flex-cc">
                                <T />
                            </Col>
                        </Row>
                        <p>
                            Cruelty Free & Vegan Hair & Makeup Artists
                        </p>
                        <p className={style.p2}>
                            <Link href='/online-bookings' prefetch={false}><a className='button2' id="view pricing">Book Appointment</a></Link>
                        </p>
                    </Col>
                    <Col lg={5} md={5} className="flex-cc d-none d-md-flex">
                        <T />
                    </Col>
                </Row>
            </section>
        </>
    )
}
 
export default Hero