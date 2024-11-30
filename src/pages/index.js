import { Fragment } from 'react';
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import Hero from '../components/home-page/hero';
import Feedbacks from '../components/feedbacks/feedbacks';
//import Services from '../components/services/services';
import Section, { LinkMode } from '../components/section/section';
import Difference from '../components/difference/difference';
import { NextSeo } from 'next-seo'
import SiteSearch from '../components/jsonLd/siteSearch';

function HomePage({children, href}){
    const router = useRouter()

  return (
    <Fragment>
      < NextSeo
        title="Mobile Hair and Makeup Services on the Gold Coast - Makeup Palace" 
        description="Makeup Palace have professional hair and makeup artists on the Gold Coast. Fully mobile services. Visit our website for quick and easy online bookings."
        site="https://www.makeuppalace.com.au"
        canonical= "https://www.makeuppalace.com.au" 
      />
      <SiteSearch
      url = {router.route}
      />
      <div className='width-limit'>
        <Hero />
      </div>
      <Row>
        <div className='home-c-left'>
          <Image src={'/images/home-c-left.png'} 
            layout='fill' 
            objectFit='contain' 
            objectPosition={'left 0'}
            priority={false}
            alt="Background Image"
          
          />
        </div>
        <div className='home-c-right'>
          <Image src={'/images/home-c-right.png'} 
            layout='fill' 
            objectFit='contain' 
            objectPosition={'right 0'}
            priority={false}
            alt="Background Image"
            
          />
        </div>
        <div>
          <Section title="BEAUTIFUL LOOKS FOR EVERY OCCASSION" imageSource="/images/services/pic3.png" alt="Rosie Johnson Professional Makeup Artist">
            <p>
              Makeup artist Rosie Johnson's spirit is tightly intertwined with
              the world of art, fashion and beauty. She specialises in providing 
              hair and makeup services on the Gold Coast, keeping track of all 
              the latest trends and new directions in the industry. 
              She uses professional and high level industry standard techniques 
              to enhance your best features. added copy.
            </p>
            <p>
              Hair styling options are flexible to suit your event, preferences and hair, 
              from classic sleek up styles to voluminous curls, or braided boho looks.
            </p>
            <p>
              Hair styling options are flexible to suit your event, preferences and hair, 
              from classic sleek up styles to voluminous curls, or braided boho looks.
            </p>
          </Section>
          <Difference />
          <Section title="Makeup Application"
                        imageSource="/images/services/pic8.png"
                        linkMode={LinkMode.right}
                        displayLink={true}
                        linkText="View Pricing"
                        linkUrl="/pricing"
                        price={'Mobile Makeup Services'}
                    >
                        <p>
                            Our most common service is hair & makeup booked in one appointment. 
                            It really is the ultimate pamper session as well as the most cost effective 
                            solution. Hair & Makeup appointments booked as one sitting, will take approximately 
                            1.5 hours per person. For group bookings, additional experienced hair & makeup artists 
                            are available to assist on the day. Extra-long hair or up styles are an additional $10.
                        </p>
                    </Section>
                    <Section title="Hair Styling"
                        imageSource="/images/services/pic9.png"
                        linkMode={LinkMode.right}
                        displayLink={true}
                        linkText="View Pricing"
                        linkUrl="/pricing"
                        price={'Mobile Hair Styling Services'}
                    >
                        <p>
                        Loose curls, or a styled up-do, having your hair styled with your makeup application is 
                        the ultimate pamper session. Whether it’s a girls night out, photoshoot or for an event, 
                        great hair can make all the difference.
                        </p>
                    </Section>
                    <Section title="HAIR & MAKEUP"
                        imageSource="/images/services/pic10.png"
                        linkMode={LinkMode.right}
                        displayLink={true}
                        linkText="Enquire Now"
                        linkUrl="/contact"
                        price={'Bridal\n Services'}
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
      <Feedbacks />
    </Fragment>
  );
}

export default HomePage;