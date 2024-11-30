import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import style from './worked-with.module.css'
import CurvedText from "../curved-text/curved-text";

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

function WorkedWith() {
    const size = useWindowSize();
    const curvedStyle = useMemo(() => {
        return size.width > 575 ? {left: 110, top: 20} : {left: '50%', top: 0}
    }, [size])

    return (
        <section className={style.container}>
            <Row className={`${style.himg} d-none d-sm-flex`}>
                <Col>
                    <Image src={'/images/himg.png'} layout="responsive" width={'118'} height={'289'} priority={false}/>                
                </Col>
            </Row>
            <Row className={`${style.himg2} d-flex d-sm-none`}>
                <Col>
                    <Image src={'/images/himg-small.png'} width={'62'} height={'151'} layout="fixed" priority={false}/>
                </Col>
            </Row>
            <div className={style.sec1}>
                <Row>
                    <Col className={style.ct} xs={12} sm={6} md={6} lg={6}>
                        <CurvedText text=" Rosie Johnson Rosie Johnson" 
                            radius={105}
                            style={curvedStyle}
                        />
                        12
                    </Col>
                    <Col className={style.cw} xs={12} sm={6} md={6} lg={6}>
                        <div className={style.divider}/>
                        <p>
                            Beauty products were not all created equal. Like many, I believe 
                            it is important to choose products that are cruelty free, good for you 
                            and good for the environment, yet still of beautiful superior quality.
                        </p>
                    </Col>
                </Row>
            </div>
            <div className={style.sec2}>
                <h2>Worked With</h2>
                <Row className={style.worked}>
                    <Col>
                        <Image src={'/images/wet-wild.png'} layout="responsive" width={'178'} height={'49'} priority={false}/>
                    </Col>
                    <Col>
                        <Image src={'/images/gc.png'} layout="responsive" width={'113'} height={'166'} priority={false}/>
                    </Col>
                    <Col>
                        <Image src={'/images/lorna.png'} layout="responsive" width={'183'} height={'49'} priority={false}/>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default WorkedWith