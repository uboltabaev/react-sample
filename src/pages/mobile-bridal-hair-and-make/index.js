import Head from 'next/head';
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Hero from "../../components/mobile-bridal-hair-and-make/hero";
import Section, { LinkMode } from "../../components/section/section";

function MobileBridalHairMake() {
    return (
        <>
            <Head>
                <title>Makeup Palace</title>
                <meta name='description' content='Fit For A Queen.'/>
            </Head>
            <div className='width-limit'>
                <Hero />
            </div>
            <section className={'yBox'}>
                <div className={'yBox-inner'}>
                    <p>
                        On your wedding day, often the best makeup doesn't cover up who you are, 
                        it is there to accentuate your natural beauty. At Makeup Palace, we provide 
                        hair styling and makeup services to enhance your features without leaving you 
                        feeling uncomfortable. Our founder Rosie Johnson and her professional team of makeup 
                        artists use expert techniques and cruelty-free products that bring out the most beautiful 
                        in you.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        The Makeup Palace team spends the extra time to create the wedding look of your dreams, 
                        from carefully arranging every lock of your hair to perfectly placing blush on your cheeks, 
                        bronzer and highlight on your cheekbones. Your happiness is their priority, which is why 
                        in addition to professionalism, Rosie and her team display a level of sensitivity that 
                        keeps brides calm and in happy spirits. By the time you walk down the aisle, you’ll feel 
                        like the most beautiful bride in the world, inside and out.
                    </p>
                </div>
            </section>
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
                    <p className="service-p-divider">&nbsp;</p>
                    <p className="service-p-divider">&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Section title="WHY CHOOSE US?"
                        imageSource="/images/services/pic10.png"
                        displayHl={true}
                    >
                        <p>
                            Owner Rosie Johnson isn’t only highly skilled and qualified, but she’s also passionate 
                            about bridal makeup. Whatever image you desire for your special day, she’ll adapt to your 
                            chosen style and create a timeless look that complements your personality while enhancing 
                            your natural beauty.
                        </p>
                        <p>
                        The Makeup Palace team are fully certified and choose our makeup products meticulously.
                        We’ve chosen the products for their quality and longevity, ensuring you of a 
                        flawless finish that will last all day and night.
                        </p>
                    </Section>
                    <Section title="BRIDAL HAIR & MAKEUP"
                        imageSource="/images/services/pic11.png"
                        displayLink={true}
                        linkMode={LinkMode.right}
                        linkText="Enquire Now"
                        linkUrl="/makeup-palace-bridal-bookings"
                        price="Bridal Services"
                    >
                        <p>
                            We understand just how significant this day is. No matter how big or small your wedding is, 
                            we know that your hair & makeup will be important to you. We work closely with you to ensure 
                            that you’re happy with exactly the way your hair & makeup looks. On this day, it’s also the 
                            little things that count. Like the perfect shade of lipstick, or the way your hair and makeup 
                            lasts throughout the day and night.
                        </p>
                    </Section>
                    <Section title="BRIDAL TRIAL"
                        imageSource="/images/services/pic12.png"
                        price="Bridal Services"
                        displayHl={true}
                    >
                        <p>
                            At this appointment, we will ensure that you are completely happy with the planned hair & makeup 
                            on the day of your wedding. We take note of the exact products, shades and techniques that 
                            you prefer and use this time to help you make these decisions. If you cannot attend your bridal trial, 
                            we can communicate prior to the event to help you with this process.
                        </p>
                    </Section>
                    <Section title="BRIDAL PARTY"
                        imageSource="/images/services/pic13.png"
                        displayLink={true}
                        linkMode={LinkMode.right}
                        linkText="Enquire Now"
                        linkUrl="/makeup-palace-bridal-bookings"
                        price="Bridal Services"
                    >
                        <p>
                            Wedding preparations the morning of the big event are truly a special experience. Many people include 
                            some of the most important people in their life, such as the mother of the bride, mother of the groom, 
                            bridesmaids and flower girls. The size of the bridal party, will determine how many additional hair & makeup 
                            artists that attend. Be comforted to know that we allow plenty of time to have a relaxed and flexible few hours 
                            of preparation.
                        </p>
                    </Section>
                </div>
            </Row>
        </>
    )
}

export default MobileBridalHairMake