import Head from 'next/head'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Hero from '../../components/formal-hair-and-makeup-gold-coast/hero'
import Section, { LinkMode } from '../../components/section/section'

function FormalHairMakeupGoldCoast() {
    return (
        <>
            <Head>
                <title>Makeup Palace</title>
                <meta name='description' content='Fit For A Queen.'/>
            </Head>
            <div className='width-limit'>
                <Hero />
            </div>
            <Row>
                <div>
                    <div className='home-c-left'>
                        <Image src={'/images/home-c-left.png'} 
                            layout='fill' 
                            objectFit='contain' 
                            objectPosition={'left 0'}
                            priority={false}
                        />
                    </div>
                    <div className='home-c-right'>
                        <Image src={'/images/home-c-right.png'} 
                            layout='fill' 
                            objectFit='contain' 
                            objectPosition={'right 0'}
                            priority={false}
                        />
                    </div>                
                    <Section title="PROFESSIONAL MAKEUP TO SUIT YOUR INDIVIDUAL STYLE?"
                        imageSource="/images/services/pic8.png"
                        linkMode={LinkMode.right}
                        displayLink={true}
                        linkText="Book Now"
                        linkUrl="/formal-booking"
                        id='2-fold-book-now'
                    >
                        <p>
                        We know not everyone will want the same thing. 
                        Whether your style is soft and natural, or full glam,
                        we know how important it is for you to feel confident 
                        on your special day. Hair and makeup is kind of our 
                        thing, so if you're not too sure about what suits you best,
                        we are happy to help you figure that out. 
                        Formal trial hair & makeup is available, just ask. 
                        </p>
                        <p>
                        You'll feel comfortable knowing that the products we use are professional quality. 
                        A little bit of touch up lipstick to take with you is included with every makeup application, 
                        just ask us for some at your appointment. 
                        </p>
                    </Section>
                    <Section title="MOBILE SERVICE: BEAUTY AND CONVENIENCE"
                        imageSource="/images/services/pic9.png"
                        linkMode={LinkMode.right}
                        displayLink={true}
                        linkText="Formal Enquiries"
                        linkUrl="/formal-booking"
                        id='3-fold-formal-enquiries'
                    >
                        <p>
                            Gone are the days when only celebrities could have makeup artists come to their home 
                            or hotel. Makeup Palace offers full makeup and hair styling in the comfort of your desired 
                            location. Our makeup artists will go anywhere on the Gold Coast (and beyond), to help you 
                            feel like a queen. 
                        </p>
                        <p>
                            Group bookings are possible, because there is nothing better and more convenient than getting 
                            ready with some of your favourite people.
                        </p>
                    </Section>
                    <Section title="WHY CHOOSE MAKEUP PALACE?"
                        imageSource="/images/services/pic10.png"
                        linkMode={LinkMode.right}
                        displayLink={true}
                        linkText="Contact Rosie"
                        linkUrl="/contact"
                        id='4-fold-contact-rosie'
                    >
                        <p>
                            Owner, Rosie Johnson is not only passionate about makeup, but she’s also highly qualified and 
                            loves people. She has worked with industry leading brands and on large commercial projects, 
                            TV shows and short films. She believes in using cruelty free products that are good for you 
                            and for the planet, alike.
                        </p>
                        <p>
                            Rosie hands picks hair stylists and makeup artists to join the team. With their combined techniques, 
                            experience and expertise, you're going to feel amazing heading off to your formal.
                        </p>
                    </Section>
                </div>
            </Row>
        </>
    )
}

export default FormalHairMakeupGoldCoast