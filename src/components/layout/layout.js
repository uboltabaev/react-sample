import { Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { BrowserView } from 'react-device-detect';
import MainNavigation from './main-navigation';
//import StickySidemenu from '../sticky-sidemenu/sticky-sidemenu';
import BookNow from '../book-now/book-now';
import Footer from '../footer/footer';
import NextScript from 'next/script'
import { GTM_ID} from '../../lib/gtm'

function Layout(props) {
  const router = useRouter()

  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />  
      </Head>
      <Fragment>
        <BrowserView>
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
        </BrowserView>
        <NextScript
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
            `,
          }}
        />
        <div>
          { (router.pathname === '/pricing' || router.pathname === '/formal-booking' || router.pathname === '/contact' || router.pathname === '/404' || router.pathname === '/contact/thank-you' || router.pathname === '/formal-booking/thank-you') &&
            <div className='extra'>
              <Image src={'/images/about-background.png'} 
                layout='fill' 
                objectFit='contain' 
                objectPosition={'100% 80px'}
                priority={true}
              />
            </div>
          }
          <Container fluid>
            <MainNavigation />
            <main>{props.children}</main>
          </Container>
        </div>
        { (router.pathname !== '/online-bookings' && router.pathname !== '/makeup-palace-bridal-bookings' && router.pathname !== '/formal-booking' && router.pathname !== '/contact' && router.pathname !== '/404' && router.pathname !== '/contact/thank-you' && router.pathname !== '/formal-booking/thank-you') &&
          <BookNow />
        }
        <Footer />
        { router.pathname !== '/contact' && router.pathname !== '/online-bookings' && router.pathname !== '/formal-booking' && router.pathname !== '/makeup-palace-bridal-bookings' 
          //<StickySidemenu />
        }
      </Fragment>    
    </>
  );
}

export default Layout;
