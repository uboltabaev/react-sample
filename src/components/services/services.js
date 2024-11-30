import Image from "next/image";
import style from './services.module.css'
import Section, { LinkMode } from "../section/section";

function Services() {
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
        </section>
    )
}

export default Services