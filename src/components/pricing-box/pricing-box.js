import React from "react";
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { Row, Col } from "react-bootstrap";
import Link from 'next/link';
import style from './pricing-box.module.css'

export const PRICING_BOX_MODE = Object.freeze({
    light: 'light',
    dark: 'dark'
})

const PricingBox = React.memo(({ mode, title, price, buttonTitle, buttonUrl, children }) => {
    return (
        <Paper elevation={7} id={title}>
            <Row className={style.container}>
                <Col lg={7}>
                    <h3>{title}</h3>
                    { children }
                </Col>
                <Col className="flex-cc" lg={5}>
                    { price &&
                        <span className={mode === PRICING_BOX_MODE.dark ? `${style.price} ${style.priceDark}` : style.price}>${price}</span>
                    }
                    { buttonTitle &&
                        <Link href={buttonUrl} prefetch={false}><a className={mode === PRICING_BOX_MODE.dark ? `button3 button3-dark` : "button3"} id={title}>{buttonTitle}</a></Link>
                    }
                </Col>
            </Row>
        </Paper>        
    )
})

PricingBox.propTypes = {
    mode: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    buttonTitle: PropTypes.string
}

PricingBox.defaultProps = {
    mode: PRICING_BOX_MODE.light
}

export default PricingBox