import Link from 'next/link';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image';
import classes from './hero.module.css';

  function Hero(){

  return (
    <section className={classes.hero}>
      <Row className={classes.wrapper}>
        <Col>
            <div className={classes.image}>
              <Image src={'/images/home-background.png'} 
                layout='fill' 
                objectFit='contain' 
                objectPosition={'100% top'}
                priority={true}
              />
            </div>
            <div className={classes.image2}>
              <Image src={'/images/home-background2.png'} 
                layout='fill' 
                objectFit='contain' 
                objectPosition={'100% top'}
                priority={true}
              />
            </div>
            <div className={classes['hero-inner']}>
              <h1>PROFESSIONAL MOBILE HAIR AND MAKEUP GOLD COAST</h1>
              <h2>Makeup Palace</h2>
              <p>
                Experience beauty at your convenience when you book 
                our mobile makeup and hair styling services for weddings, 
                formals and other special occasions on the Gold Coast.
              </p>
              <p className={classes.p2}>
                <Link href='/mobile-hair-and-makeup-services' prefetch={false}><a className='button2' id="hero-view-our-services">Our Services</a></Link>
              </p>
            </div>
        </Col>
      </Row>
    </section>
  );
}

export default Hero;
