import { Fragment } from 'react';
import Head from 'next/head';
import PricingBox, { PRICING_BOX_MODE } from '../../components/pricing-box/pricing-box';

function Pricing(props) {
  return (
    <Fragment>
      <Head>
        <title>Makeup Palace Pricing</title>
        <meta
          name='description'
          content='Fit For A Queen.'
        />
      </Head>
      <div className='width-limit'>
        <div className='pricing-fold'>
          <h1 className={'pricing'}>Our Services And Pricing</h1>
        </div>
      </div>
      <section className='white-area'>
        <div className='white-area-inner'>
          <h2>Hair & Makeup Packages</h2>
          <p>
            Wherever the destination on the Gold Coast, we will provide professional hair 
            and makeup services for your special event. To avoid any inconvenience to you, 
            we advise that you book your appointments early to confirm your desired dates. 
            Travel charges may be added depending on your location if outside of the Gold Coast region.
          </p>
          <p>&nbsp;</p>
          <PricingBox title="HAIR & MAKEUP" 
            price={180}
            buttonTitle="Book Now"
            buttonUrl="/online-bookings"
          >
            <p>
              Hair & makeup in one sitting. From natural to full glam, the makeup look is personalised 
              to suit you and the occasion. Includes lashes. This includes a basic hairstyle.
            </p>
          </PricingBox>
          <PricingBox title="GROUP BOOKINGS " 
            buttonTitle="Enquire For Group Bookings"
            buttonUrl="/online-bookings"
          >
            <p>
            Large group bookings and various options available. Please enquire to arrange a booking..
            </p>
          </PricingBox>
          <PricingBox title="MAKEUP"
            price={120}
            buttonTitle="Book Now"
            buttonUrl="/online-bookings"
          >
            <p>
              From natural to full glam, the makeup look is personalised to suit you and the occasion. 
              Includes lashes.
            </p>
          </PricingBox>
          <PricingBox title="MAKEUP TUTORIAL"
            price={250}
            buttonTitle="Book Now"
            buttonUrl="/online-bookings"
          >
            <p>
              A 2.5 hr private lesson that includes: skin care, eye techniques, complexion, understanding products, 
              lips, contouring and eyebrows.
            </p>
          </PricingBox>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <h2>Bridal Hair & Makeup Packages</h2>
          <p>
            Each wedding is different and special, so feel free to contact us for a quote so we can perfectly 
            accommodate your requirements. For bridal parties, we organise the required number of professional 
            hair stylists and makeup artists for you to ensure wedding preparations run smoothly.
          </p>
          <p>&nbsp;</p>
          <PricingBox title="BRIDAL HAIR & MAKEUP"
            price={240}
            mode={PRICING_BOX_MODE.dark}
          >
            <p>
              Bridal Hair & Makeup to get you ready on your big day. Bridal hair & makeup can be so different 
              depending upon the individual. We spend the extra time to make sure that you hair & makeup makes 
              you feel like the most confident version of yourself.
            </p>
          </PricingBox>
          <PricingBox title="BRIDESMAID HAIR & MAKEUP"
            price={200}
            mode={PRICING_BOX_MODE.dark}
          >
            <p>
              There is nothing better than having the whole bridal party together to relax before the main event. 
              Rosie works with many personally recommended professional hair stylist & makeup artists, 
              who she brings with her for bridal party bookings.
            </p>
          </PricingBox>
          <PricingBox title="BRIDAL HAIR & MAKEUP TRIAL"
            price={200}
            mode={PRICING_BOX_MODE.dark}
          >
            <p>
              When it comes to weddings, planning is everything and your hair & makeup trial is critical. 
              By booking this in well in advance, together we can work out exactly the look you are going for, 
              which colours and products you prefer, and make any changes as necessary.
            </p>
          </PricingBox>
          <PricingBox title="BRIDAL MAKEUP ONLY"
            price={140}
            mode={PRICING_BOX_MODE.dark}
          >
            <p>
              We will always play nice with others including your own preferred hair stylist. If you only require 
              our bridal makeup service for you and your bridesmaids, we are more than happy to work in with your hairstylist.
            </p>
          </PricingBox>
          <PricingBox title="TRAVEL COSTS"
            buttonTitle="Enquire"
            buttonUrl="/contact"
            mode={PRICING_BOX_MODE.dark}
          >
            <p>
              For travel costs, particularly outside of the Gold Coast, please contact us and we can provide a quote.
            </p>
          </PricingBox>
        </div>
      </section>
    </Fragment>
  );
}


export default Pricing;