import React from "react";
import Image from "next/image";
import classes from './makeup-bottom.module.css';

const MakeupBottom = React.memo(() => {
    return (
        <div className={classes.bottom}>
            <Image src={'/images/vimg.png'} width="289" height='118' layout="fixed" priority={false}/>
        </div>
    )
})

export default MakeupBottom