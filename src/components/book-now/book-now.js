import React, { useMemo } from "react"
import { Row, Col } from "react-bootstrap"
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from 'next/router';
import style from './book-now.module.css'

function BookNow() {
    const router = useRouter()

    const bookNowUrl = useMemo(() => {
        switch (router.pathname) {
          case '/mobile-bridal-hair-and-make':
            return '/makeup-palace-bridal-bookings'
          case '/formal-hair-and-makeup-gold-coast':
            return '/formal-booking'
          default:
            return '/online-bookings'
        }
    }, [router.pathname])    

    return (
        <Row className={`flex-cc ${style.container} g-0`}>
            <Col className={'flex-cc'}>
                <div className={style.background}>
                    <Image src={'/images/blur.png'} 
                        layout='fill' 
                        objectFit='contain' 
                        objectPosition={'right center'}
                        priority={false}
                    />
                </div>
                <h3>Get Pampered Without The Worry</h3>
                <p>
                    You expect your makeup to look like an enhanced version of you. 
                    Why should that change when the makeup artist arrives? You can 
                    be sure that the products we use are not only professional quality,
                    but also applied by experienced professionals
                </p>
                <div>
                    <Row className={`flex-cc ${style.booking}`}>
                        <Col className={style.icon}>
                            <Image src={'/images/icons/booking.png'} layout="responsive" width="26" height="30" priority={false}></Image>
                        </Col>
                        <Col>
                            <Link href={bookNowUrl} prefetch={false}><a className={`button`} id='btn-book-now-pre-footer'>Book Now</a></Link>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default BookNow