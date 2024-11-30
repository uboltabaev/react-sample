import Image from "next/image";
import style from './home-services.module.css'
import Section, { LinkMode } from "../section/section";

function HomeServices() {

    return (
        <section className={style.container}>
            <div className={style.background}>
                <Image src={'/images/wave.png'} 
                    layout='fill' 
                    objectFit='contain' 
                    objectPosition={'300px center'}
                    priority={false}
                />
            </div>
            <h2>Services</h2>
            <Section title="Makeup Application"
                imageSource="/images/services/pic12.png"
                displayHl={true}
                linkMode={LinkMode.right}
                linkText="Enquire Now"
                linkUrl="/online-bookings"
                price="Mobile Makeup"
                
            >
                <p>
                   Using only the best quality, cruelty-free 
                   products, the artistry is in the application. 
                   Certified in Progressive Makeup Artistry, Rosie 
                   works with individual client requirements to 
                   deliver the desired outcome. Makeup services 
                   range from bridal, to natural makeup or full 
                   glam, and even commercial and film work.
                </p>
            </Section>
            <Section title="Hair Styling"
                imageSource="/images/services/pic13.png"
                displayLink={true}
                linkMode={LinkMode.right}
                linkText="Enquire Now"
                linkUrl="#."
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
            <Section title="Hair Styling"
                imageSource="/images/services/pic13.png"
                displayLink={true}
                linkMode={LinkMode.right}
                linkText="Enquire Now"
                linkUrl="#."
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
        </section>
    )
}

export default HomeServices