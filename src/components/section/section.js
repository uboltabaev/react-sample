import React from "react";
import PropTypes from 'prop-types';
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import parse from 'html-react-parser';
import style from './section.module.css'

export const LinkMode = Object.freeze({
    bottom: 'BOTTOM',
    right: 'RIGHT'
})

const Section = React.memo(({ title, imageSource, linkMode, displayLink, linkText, linkUrl, price, displayHl, children, id, alt }) => {
    return (
        <section className={style.container} id={title}>
            <Row className={style.r}>
                <Col style={{position: 'relative'}} md={6} className={style.imageWrapper}>
                    { price &&
                        <div className={style.price}>
                            {price}
                        </div>
                    }
                    <Image src={imageSource} layout="responsive" width={391} height={454} priority={false} alt={alt}/>
                </Col>
                <Col className="d-flex d-md-none" md={12}>
                    <h3>
                        {parse(title)}
                    </h3>                
                </Col>
                <Col className={style.l} md={6}>
                    {children}
                    { displayLink && linkMode === LinkMode.right &&
                        <div className={style.rButtonWrapper}>
                            <Link href={linkUrl} prefetch={false}><a className="button2" id={id}>{linkText}</a></Link>
                        </div>
                    }
                </Col>
            </Row>
            <Row className="d-none d-md-flex">
                <Col>
                    <h3>
                        {parse(title)}
                    </h3>
                </Col>
                <Col>&nbsp;</Col>
            </Row>
            { displayLink && linkMode === LinkMode.bottom &&
                <>
                    <Row>
                        <Col className={`flex-cc ${style.buttonWrapper}`}>
                            <Link href={linkUrl} prefetch={false}><a className="button2" id={id}>{linkText}</a></Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={`flex-cc ${style.hlWrapper}`}>
                            <div className={style.hl}/>
                        </Col>
                    </Row>                
                </>
            }
            { displayLink && linkMode === LinkMode.right &&
                <Row>
                    <Col className={`flex-cc ${style.hlWrapper2}`}>
                        <div className={style.hl}/>
                    </Col>
                </Row>
            }
            { displayHl &&
                <Row>
                    <Col className={`flex-cc ${style.hlWrapper2}`}>
                        <div className={style.hl}/>
                    </Col>
                </Row>
            }
        </section>
    )
})

Section.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    linkMode: PropTypes.string,
    displayLink: PropTypes.bool,
    linkText: PropTypes.string,
    linkUrl: PropTypes.string,
    price: PropTypes.string,
    displayHl: PropTypes.bool
}

Section.defaultProps = {
    title: '',
    linkMode: LinkMode.bottom,
    displayLink: false,
    displayHl: false
}

export default Section