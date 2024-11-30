import Link from 'next/link';
import { Row, Col } from 'react-bootstrap'
import classes from './hero.module.css';
import Image from 'next/image'

function HeroTest() {
  return (
    <section className={classes.hero}>
        <Row >
          <Image className={classes.image}
            src="/images/home-background.png"
            alt="Makeup Palace"
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            priority={true}
          />
        <Col>
        <div className={classes['hero-inner']}>
          <h1>Makeup Palace</h1>
          <p>

            Experience beauty at your convenience when you book 
            our mobile makeup and hair styling services for weddings, 
            formals and other special occasions on the Gold Coast.
          </p>
          <p className={classes.p2}>
          <Link href='/mobile-hair-and-makeup-services'><a className='button2' id="hero-view-our-services">Our Services</a></Link>
           
          </p>
        </div>
        </Col>
      </Row>
    </section>
  );
}

export default HeroTest;