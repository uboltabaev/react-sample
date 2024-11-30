import React, { Fragment } from "react"
import Image from "next/image"
import Hero from "../components/about/hero"
import WorkedWith from "../components/about/worked-with"
import { NextSeo } from 'next-seo'


export default function About() {
    return (
        <Fragment>
             < NextSeo
        title="About Us - Makeup Palace" 
        description="Makeup Palace offers mobile hair and makeup services on the Gold Coast. Visit this page for more about our founder and certified makeup artist Rosie Johnson."
        site="https://www.makeuppalace.com.au/about"
        canonical= "https://www.makeuppalace.com.au/about" 
      />
            <div className='width-limit'>
                <Hero />
            </div>
            <section className={'yBox'}>
                <div className={'yBox-inner'}>
                    <div className='yBox-divider'/>
                    <p>
                        Over the last few years, I have been honored to work with brands 
                        such as Lorna Jane, Engine Swim and Eye of Horus. I have also worked 
                        on many larger commercial projects, short films and TV shows. In 2018, 
                        I was also able to be a part of the Makeup & Hair team for the Pro 
                        Dancers & Cast at the Opening & Closing Ceremony at the Commonwealth Games.
                    </p>
                    <div className='yBox-divider' style={{marginTop: 56}}/>
                    <p>
                        Certified in Progressive Makeup Artistry, my passion for hair and makeup 
                        began because I realised the power of what it can create. Whether it helps 
                        an actor get into character or a bride feel confident to step down the aisle, 
                        great hair and makeup can make all the difference.
                    </p>
                </div>
            </section>
            <div className="worked-container">
                <div className={'worked-left'}>
                    <Image src={'/images/worked-left.png'} 
                        layout='fill' 
                        objectFit='contain' 
                        objectPosition={'left top'}
                        priority={false}
                    />
                </div>
                <div className={'worked-right'}>
                    <Image src={'/images/worked-right.png'} 
                        layout='fill' 
                        objectFit='contain' 
                        objectPosition={'right top'}
                        priority={false}
                    />
                </div>
                <div className='width-limit'>
                    <WorkedWith />
                </div>
            </div>
        </Fragment>
    )
}