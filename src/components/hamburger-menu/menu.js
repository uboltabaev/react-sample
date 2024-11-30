import React, { Fragment } from "react";
import Drawer from '@mui/material/Drawer';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled }  from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from './menu.module.css'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} sx={{padding: '0 0 !important'}}/>
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));
  
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', transform: 'rotate(90deg)' }} />}
        {...props}
        sx={{
            '&:hover': {
                background: '#EDEDED'
            },
            paddingLeft: 0
        }}
    />
))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper': {
        marginRight: 100,
        marginTop: 6
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(-180deg)'
    },
    '& .MuiAccordionSummary-content': {
        marginTop: 0,
        marginBottom: 0,
        padding: '0'
    }
}));
  
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: '0 40px'
}));  

const HamburgerMenu = React.memo(() => {
    const [state, setState] = React.useState({
        right: false
    })

    const [expanded, setExpanded] = React.useState(false)
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open })
    }

    const handleChange = (event, newExpanded) => {
        setExpanded(newExpanded)
    };    

    return (
        <Fragment>
            <Link href=""><a onClick={toggleDrawer('right', true)}>
                <Image src={'/images/icons/hamburger.png'} layout="fixed" width={'38'} height={'22'} priority={true}/>
            </a></Link>
            <Drawer anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                sx={{
                    "& .MuiPaper-root": {
                        width: 360,
                        backgroundColor: '#E5C287',
                        padding: '25px 40px'
                    }
                }}
            >
                <Row className={style.top}>
                    <Col>
                        <Image src={'/images/logo-dark.png'} width={45} height={48} priority={true}/>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <Image src={'/images/close.png'} width={25} height={25} className={style.close} onClick={toggleDrawer('right', false)} priority={true}/>
                    </Col>
                </Row>
                <Row className={style.hamburgerMenu}>
                    <Col>
                        <ul>
                            <li>
                                <Link href={'/makeup-artist-gold-coast'} prefetch={false}><a onClick={toggleDrawer('right', false)}>Why Choose Us</a></Link>
                            </li>
                            <li>
                                <Accordion expanded={expanded} onChange={handleChange}>
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        <span className={style.menuItem}>Services</span>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul className={style.subMenu}>
                                            <li><Link href={'/mobile-hair-and-makeup-services'} prefetch={false}><a onClick={toggleDrawer('right', false)}>Mobile Hair and Makeup</a></Link></li>
                                            <li><Link href={'/mobile-bridal-hair-and-make'} prefetch={false}><a onClick={toggleDrawer('right', false)}>Bridal Services</a></Link></li>
                                            <li><Link href={'/formal-hair-and-makeup-gold-coast'} prefetch={false}><a onClick={toggleDrawer('right', false)}>Formal Services</a></Link></li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Link href={'/about'} prefetch={false}><a onClick={toggleDrawer('right', false)}>About Us</a></Link>
                            </li>
                            <li>
                                <Link href={'/blog'} prefetch={false}><a onClick={toggleDrawer('right', false)}>Blog</a></Link>
                            </li>
                            <li>
                                <Link href={'/pricing'} prefetch={false}><a onClick={toggleDrawer('right', false)}>Pricing</a></Link>
                            </li>
                            <li>
                                <Link href={'/contact'} prefetch={false}><a onClick={toggleDrawer('right', false)}>Contact Us</a></Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Drawer>
        </Fragment>
    )
})

export default HamburgerMenu