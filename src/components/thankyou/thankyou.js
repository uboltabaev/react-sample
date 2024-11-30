import React from "react"
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo';


const ThankYou = React.memo(({ message }) => {
    return (
        
        <section className="thankyou">
            <NextSeo noindex={true} nofollow={true} />
            <h1>Thank you</h1>
            <p>{ message }</p>
        </section>
    )
})

ThankYou.propTypes = {
    message: PropTypes.string.isRequired
}

export default ThankYou