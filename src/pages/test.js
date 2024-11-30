import Head from "next/head"
import Image from "next/image"
import MainNavigation from "../components/layout/main-navigation"
import StickySidemenu from "../components/sticky-sidemenu/sticky-sidemenu"

function Test() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />  
            </Head>
            <div className="body">
                <Image src={'/images/background-right.png'} 
                    layout='fill' 
                    objectFit='contain' 
                    objectPosition={'right top'}
                    priority={true}
                />
            </div>
            <div className='body-inner'>
                <Image src={'/images/background-left.png'} 
                    layout='fill' 
                    objectFit='contain' 
                    objectPosition={'left top'}
                    priority={true}
                />
            </div>


            <MainNavigation />
            <StickySidemenu />
        </>
    )
}

export default Test