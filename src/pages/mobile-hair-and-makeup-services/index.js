import Image from "next/image";
import Row from "react-bootstrap/Row";
import Hero from "../../components/mobile-hair-makeup-services/hero";
import Section, { LinkMode } from "../../components/section/section";
import { NextSeo } from 'next-seo'

function MobileHairMakeupServices() {
    return (
        <>
           < NextSeo
        title="Mobile Makeup Artist on the Gold Coast - Makeup Palace" 
        description="Need a makeup artist on the Gold Coast? Makeup Palace brings a professional artist to you with our mobile makeup services. Visit our site to learn more."
        site="https://www.makeuppalace.com.au/monbile-hair-and-makeup-services"
        canonical= "https://www.makeuppalace.com.au/mobile-hair-and-makeup-services" 
      />
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
                            priority={true}
                        />
                    </div>
                    <div className='home-c-right'>
                        <Image src={'/images/home-c-right.png'} 
                            layout='fill' 
                            objectFit='contain' 
                            objectPosition={'right 0'}
                            priority={true}
                        />
                    </div>
                    <Section title="MOBILE HAIR & MAKEUP"
                        imageSource="/images/services/pic8.png"
                        linkMode={LinkMode.right}
                        displayLink={true}
                        linkText="Book Appointment"
                        linkUrl="/online-bookings"
                        price={'$180'}
                    >
                        <p>
                            Our most common service is hair & makeup booked in one appointment. 
                            It really is the ultimate pamper session as well as the most cost effective 
                            solution. Hair & Makeup appointments booked as one sitting, will take approximately 
                            1.5 hours per person. For group bookings, additional experienced hair & makeup artists 
                            are available to assist on the day. Extra-long hair or up styles are an additional $10.
                        </p>
                    </Section>
                    <Section title="MAKEUP APPLICATION"
                        imageSource="/images/services/pic9.png"
                        linkMode={LinkMode.right}
                        displayLink={true}
                        linkText="Book Your Appointment"
                        linkUrl="/online-bookings"
                        price={'$120'}
                    >
                        <p>
                            Makeup means much more than simply applying products. It’s personal. Makeup can inspire confidence. 
                            For an actor playing a character, or a bride on her wedding day, makeup is just as much about 
                            how you feel as it is about how you look. Using only premium, safe, high quality products, 
                            you can feel comfortable knowing that your makeup will look good and be good for you too.
                        </p>
                    </Section>
                    <Section title="HAIR & MAKEUP"
                        imageSource="/images/services/pic10.png"
                        linkMode={LinkMode.right}
                        displayLink={true}
                        linkText="Enquire Now"
                        linkUrl="/contact"
                        price={'Bridal\n Sevices'}
                    >
                        <p>
                            Wedding preparations the morning of the big event are truly a special experience. 
                            Many people include some of the most important people in their life, such as the mother of the bride, 
                            mother of the groom, bridesmaids and flower girls. The size of the bridal party, will determine how many 
                            additional hair & makeup artists that attend. Be comforted to know that we allow plenty of time to have 
                            a relaxed and flexible few hours of preparation.
                        </p>
                    </Section>
                </div>
            </Row>
        </>
    )
}

export default MobileHairMakeupServices