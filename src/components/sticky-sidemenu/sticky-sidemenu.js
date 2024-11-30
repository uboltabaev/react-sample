import React, { useState, useEffect, useMemo } from "react";
import Router, { useRouter } from "next/router";
import Slide from '@mui/material/Slide';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import PropTypes from 'prop-types';
import style from './sticky-sidemenu.module.css'
import CurvedText from '../curved-text/curved-text'

export const SIDEMENU_MODE = Object.freeze({
    normal: 'NORMAL',
    right: 'RIGHT'
})

function StickySidemenu({ mode }) {
    const router = useRouter()

    const bookNowUrl = useMemo(() => {
        switch (router.pathname) {
          case '/mobile-bridal-hair-and-make':
            return '/makeup-palace-bridal-bookings'
          case '/formal-hair-and-makeup-gold-coast':
            return '/formal-booking'
          default:
            return '/online-bookings'
        }
    }, [router.pathname])

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const goBookNow = () => {
        Router.push(bookNowUrl)
    }

    return (
        <div className={mode === SIDEMENU_MODE.normal ? style.relativeContainer : style.container}>
            <div>
                <CurvedText text=" Professional Mobile Hair and Makeup Gold Coast"/>
            </div>
            <div className={style.nav}>
                <ul>
                    <li>
                        <Tooltip title="Book Now" placement="top" TransitionComponent={Slide}>
                            <IconButton onClick={goBookNow}>
                                <EventAvailableRoundedIcon sx={{color: '#000'}}/>
                            </IconButton>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Call Us on 0432282609" placement="top" TransitionComponent={Slide}>
                            <IconButton>
                                <PhoneRoundedIcon sx={{color: '#000'}}/>
                            </IconButton>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="We’re Online, Click to Live Chat" placement="top" TransitionComponent={Slide}>
                            <IconButton id='#chat_box_click'>
                                <ChatRoundedIcon sx={{color: '#000'}}/>
                            </IconButton>
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </div>
    )
}

StickySidemenu.propTypes = {
    mode: PropTypes.string,
}

StickySidemenu.defaultProps = {
    mode: StickySidemenu.right
}

export default StickySidemenu;