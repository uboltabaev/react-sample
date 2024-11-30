import React from "react"
import { Row, Col } from 'react-bootstrap'
import Link from "next/link"
import Image from "next/image"
import style from './hero.module.css'

function Hero() {
    return (
        <section className={style.hero}>
            <Row className={style.wrapper}>
                <Col>
                    <div className={style.image}>
                        <Image src={'/images/why-choose-us.png'} 
                            layout='fill' 
                            objectFit='contain' 
                            objectPosition={'80% top'}
                            priority={true}
                        />
                    </div>
                    <div className={style.image2}>
                        <Image src={'/images/why-choose-us2.png'} 
                            layout='fill' 
                            objectFit='contain' 
                            objectPosition={'100% top'}
                            priority={true}
                        />
                    </div>
                    <div className={style['hero-inner']}>
                        <h1>Mobile Makeup Artists Gold Coast</h1>
                        <p>
                            Makeup Palace's mobile makeup artists on the Gold Coast 
                            offer hair and makeup styling services for every occasion.
                        </p>
                        <p className={style.p2}>
                            <Link href='/pricing' prefetch={false}><a className='button2' id="hero-view-pricing">View Pricing</a></Link>
                        </p>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Hero