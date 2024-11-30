import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from './footer.module.css';

function Footer() {
    const footerRef = useRef(null)
    useEffect(() => {
        //console.log(footerRef.current.offsetTop)
    }, [])
    return (
        <footer className={styles.footer} ref={footerRef}>
            <div className="width-limit">
                <Row className={`${styles['r1']}`}>
                    <Col lg={2} className={styles.logo}>
                        <Link prefetch={false} href={'/'}><a><Image src={'/images/makup-palace.png'} layout="responsive" width={211} height={102} priority={false}/></a></Link>
                    </Col>
                    <Col lg={8} className={styles.nav}>
                        <nav>
                            <ul className={styles.navLinks}>
                                <li><Link prefetch={false} href={'/makeup-artist-gold-coast'}><a>Why Choose Us</a></Link></li>
                                <li><Link prefetch={false} href={'/mobile-hair-and-makeup-services'}><a>Mobile Hair And Makeup</a></Link></li>
                                <li><Link prefetch={false} href={'mobile-bridal-hair-and-make'}><a>Bridal Services</a></Link></li>
                                <li><Link prefetch={false} href={'/blog'}><a>Blog</a></Link></li>
                                <li><Link prefetch={false} href={'/pricing'}><a>Pricing</a></Link></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col lg={2}>
                        <ul className={styles.social}>
                            <li>
                                <Link prefetch={false} href={'https://www.facebook.com/makeuppalacegoldcoast'}><a target="_blank" id="facebook">
                                    <Image src={'/images/icons/facebook.png'} layout="responsive" width={10} height={19} priority={false}/>
                                </a></Link>
                            </li>
                            <li>
                                <Link prefetch={false} href={'https://www.instagram.com/_makeuppalace'}><a target="_blank" id="instagram">
                                    <Image src={'/images/icons/instagram.png'} layout="responsive" width={'18'} height={'19'} priority={false}/>
                                </a></Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className={styles.r2}>
                    <Col className={styles['r2-inner']}>
                        <ul>
                            <li className={styles.copyright}>
                                2022 Makeup Palace. All rights reserved. 
                            </li>
                            <li>
                                <Link prefetch={false} href={'/privacy-policy'}><a>Privacy Policy</a></Link>
                            </li>
                            <li>
                                <Link prefetch={false} href={'/terms'}><a>Terms of Service</a></Link>
                            </li>
                            <li>
                                <Link prefetch={false} href={'cookies'}><a>Cookies Settings</a></Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>

        </footer>
    )
}

export default Footer;