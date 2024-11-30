import React, { useCallback, useState } from "react"
import SwipeableViews from 'react-swipeable-views'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "next/image"
import Link from "next/link"
import Pagination from "./pagination"
import style from './carousel.module.css'

const items = [
    {
        name: "Elisha Graeff",
        description: "I would have used her services about 20 times now for weddings, events, photo shoots and filming. I have also referred her to a number of my clients and friends. She is professional, talented, qualified, beautiful inside and out, punctual and has loads of experience. She is well priced and I have never had a bad experience. 5 stars from me",
        initial: "HAIR & MAKEUP CLIENT",
        pic: {
            url: '/images/woman.png',
            width: 181,
            height: 181
        }
    },
    {
        name: "Elisha Graeff",
        description: "I would have used her services about 20 times now for weddings, events, photo shoots and filming. I have also referred her to a number of my clients and friends. She is professional, talented, qualified, beautiful inside and out, punctual and has loads of experience. She is well priced and I have never had a bad experience. 5 stars from me",
        initial: "HAIR & MAKEUP CLIENT",
        pic: {
            url: '/images/woman.png',
            width: 181,
            height: 181
        }
    },
    {
        name: "Elisha Graeff",
        description: "I would have used her services about 20 times now for weddings, events, photo shoots and filming. I have also referred her to a number of my clients and friends. She is professional, talented, qualified, beautiful inside and out, punctual and has loads of experience. She is well priced and I have never had a bad experience. 5 stars from me",
        initial: "HAIR & MAKEUP CLIENT",
        pic: {
            url: '/images/woman.png',
            width: 181,
            height: 181
        }
    }
]

function Item(props)
{
    return (
        <div className={style['carousel-content']}>
            <Row className={style.rw} id={props.item.name}>
                <Col className={style.pic}>
                    <Image src={'/images/woman.png'} 
                       layout="responsive"
                        width={props.item.pic.width} 
                        height={props.item.pic.height}
                        priority={false}
                    />
                </Col>
                <Col>
                    <h5>{props.item.name}</h5>
                    <p>
                        {props.item.description}
                    </p>
                    <p className={style['initial']}>
                        {props.item.initial}
                    </p>
                </Col>
            </Row>
        </div>
    )
}

const Carousel = React.memo(() => {
    const [index, setIndex] = useState(0)
    const dotsNum = items.length
 
    const prev = useCallback(() => {
        if (index > 0)
            setIndex(index - 1)
    }, [index])

    const next = useCallback(() => {
        if (index < (dotsNum - 1))
            setIndex(index + 1)
    }, [index])

    return (
        <div className={style.carousel}>
            <SwipeableViews enableMouseEvents index={index}>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </SwipeableViews>
            <div className={`flex-cc ${style.cc}`}>
                <Link href={'#.'}>
                    <a onClick={prev} className={style.prevIcon}><Image src={'/images/icons/prev.png'} layout="responsive" width={20} height={34} priority={false}/></a>
                </Link>
                <Pagination dots={dotsNum} index={index} onChangeIndex={setIndex} />
                <Link href={'#.'}>
                    <a onClick={next} className={style.nextIcon}><Image src={'/images/icons/next.png'} layout="responsive" width={20} height={34} priority={false}/></a>
                </Link>
            </div>
        </div>
    )
})

export default Carousel