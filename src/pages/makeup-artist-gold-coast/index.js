import React, { Fragment } from "react";
import Head from 'next/head';
import Image from "next/image";
import { Row } from "react-bootstrap";
import Hero from "../../components/makeup-artist-gold-coast/hero";
import Section, { LinkMode } from "../../components/section/section";

function MakeupArtistGoldCoast() {
    return (
        <Fragment>
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
                    <Section title="STUNNING MAKEUP FOR EVERY OCCASION" 
                        imageSource="/images/services/pic4.png"
                        linkMode={LinkMode.bottom}
                        displayLink={true}
                        linkText="Book Now"
                        linkUrl="/online-bookings"
                    >
                        <p style={{textAlign: "left"}}>
                            Rosie and the team at Makeup Palace have helped thousands of people on 
                            the Gold Coast and surrounds feel pampered, confident and beautiful. 
                            Covering a wide range of occasions, makeup application and hairstyling 
                            can be done suitable to the requirements. Common occasions and reasons 
                            for hair and makeup include, but are not limited to the following:
                        </p>
                        <p className="service-p-divider">&nbsp;</p>
                        <ul>
                            <li>
                                Brides, bridal parties, wedding guests and bridal family members
                            </li>
                            <li>
                                Hen's parties, for either just the bride to be or as a group
                            </li>   
                            <li>
                                Girls night out
                            </li>
                            <li>
                                Drag makeup
                            </li>
                            <li>
                                Hair & Makeup for photoshoots (indoor and outdoor)
                            </li>
                            <li>
                                Hair & Makeup for clients attending important events such as
                                birthdays, baby showers, anniversaries, work conferences and formal events
                            </li>
                            <li>
                                Hair & Makeup for TV, interviews, short film and stage performance
                            </li>
                            <li>
                                Bodybuilding & Modelling competitions
                            </li>
                            <li>
                                Dance Competitions
                            </li>
                            <li>
                                One on one or group makeup tutorials
                            </li>
                        </ul>
                    </Section>
                    <Section title="MOBILE MAKEUP GOLD COAST: BEAUTY AND CONVENIENCE" 
                        imageSource="/images/services/pic5.png"
                        linkMode={LinkMode.bottom}
                        displayLink={true}
                        linkText="Contact us to enquire now"
                        linkUrl="/contact"
                        
                    >
                        <p style={{textAlign: "left"}}>
                            One of the things that our clients love the most is the convenience of 
                            having a hair & makeup artist come to your home, hotel room or other 
                            required location. Since Makeup Palace is primarily a mobile makeup 
                            and hair service, without a salon location, it makes it possible to 
                            provide an affordable service.
                        </p>
                        <p className="service-p-divider">&nbsp;</p>
                        <p style={{textAlign: "left"}}>
                            Our Gold Coast makeup artists and hair stylists will go anywhere in 
                            the Gold Coast city with no additional travel fee. This means that 
                            you'll only be paying for your hair & makeup service, without having 
                            to pay an additional cost for the travel of the hair & makeup artist.
                        </p>
                        <p className="service-p-divider">&nbsp;</p>
                        <p style={{textAlign: "left"}}>
                            For services outside the Gold Coast, the travel costs are extremely 
                            reasonable and dependent on both date and location. Please enquire 
                            for travel costs outside of the Gold Coast city.
                        </p>
                    </Section>
                    <Section title="WHY CHOOSE MAKEUP PALACE?" 
                        imageSource="/images/services/pic6.png"
                        linkMode={LinkMode.bottom}
                        displayLink={true}
                        linkText="Book online"
                        linkUrl="online-bookings"
                    >
                        <p style={{textAlign: "left"}}>
                            Owner Rosie Johnson is not only passionate about makeup, hair and beauty, 
                            but she’s also highly qualified and motivated. In addition to receiving 
                            diploma level qualifications, Rosie is continuously keeping up with industry 
                            knowledge and standards. In the last few years, she has worked on some 
                            exciting and career defining projects such as large commercial projects, 
                            TV shows and short films. In addition, Rosie has worked with multiple 
                            leading brands and high profile clients.
                        </p>
                        <p className="service-p-divider">&nbsp;</p>
                        <p style={{textAlign: "left"}}>
                            More importantly, Rosie genuinely cares about her clients. She chooses 
                            vegan and cruelty free, safe, professional standard products at Makeup Palace. 
                            She also believes that the most important part of being a hair and makeup 
                            artist is about understanding exactly what the client wants. It's not 
                            just about using quality products or being an incredible artist, 
                            it's about giving the best service to all clients.
                        </p>
                    </Section>
                    <Section title="MOBILE MAKEUP GOLD COAST: BEAUTY AND CONVENIENCE" 
                        imageSource="/images/services/pic7.png"
                        linkMode={LinkMode.bottom}
                        displayLink={true}
                        linkText="Contact us to enquire now"
                        linkUrl="/contact"
                    >
                        <p style={{textAlign: "left"}}>
                            Our mobile Gold Coast makeup artists and hair stylists make it convenient. 
                            You can be sure that we've had the experience to know exactly what is required 
                            and suitable to the occasion. Not every client is the same, so while the 
                            hair & makeup need to fit the occasion, it also needs to suit the client. 
                            We are happy to work with your wants and needs, but can also give suggestions 
                            on what we think will work best for your features.
                        </p>
                        <p className="service-p-divider">&nbsp;</p>
                        <p style={{textAlign: "left"}}>
                            Makeup Palace uses professional quality, vegan and cruelty free products that are 
                            designed to last all day and all night. It means that you can have your makeup done 
                            without the worry of whether it will last until the end of your event. 
                            The products and professional techniques that are used have been tried and tested, 
                            but we are also constantly evolving to keep up with trends and new products.
                            Our professional hair stylists and makeup artists work time efficiently, with attention 
                            to detail and years of experience. To handle group sessions and bridal packages, 
                            we are able to arrange a team of professional Makeup Palace makeup artists 
                            and hair stylists to attend the booking
                        </p>
                    </Section>
                </div>
            </Row>
        </Fragment>
    )
}

export default MakeupArtistGoldCoast