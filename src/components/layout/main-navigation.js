import React, { useCallback, useMemo } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {styled}  from '@mui/material/styles/';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from './logo';
import classes from './main-navigation.module.css';
import HamburgerMenu from '../hamburger-menu/menu';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#E5C287',
    borderRadius: '0px 45px 0px 0px',
    marginTop: theme.spacing(1),
    minWidth: 270,
    color: '#151515',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      padding: '14px 20px',
      '&:hover, &.Mui-focusVisible': {
        backgroundColor: '#EDEDED'
      },
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      }
    },
  },
}));

function MainNavigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [])

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

  return (
    <header className={classes.header}>
      <Row className={classes['header-inner']}>
        <Col lg={2} md={6} sm={4} xs={4}>
          <Link prefetch={false} href='/' id='logo'>
            <a>
              <Logo id='logo-id'/>
            </a>
          </Link>        
        </Col>
        <Col lg={8} className="d-none d-lg-flex">
          { router.pathname !== '/online-bookings' && router.pathname !== '/formal-booking' && router.pathname !== '/makeup-palace-bridal-bookings' &&
            <nav>
              <ul>
                <li>
                  <Link prefetch={false} href='/makeup-artist-gold-coast'><a className={router.pathname === '/makeup-artist-gold-coast' ? classes.active : ''}>Why Choose Us</a></Link>
                </li>
                <li>
                  <Link prefetch={false} href=''><a onClick={handleClick} className={classes.arrow}>Services</a></Link>
                  <StyledMenu anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <Link prefetch={false} href={'/mobile-hair-and-makeup-services'}>
                      <MenuItem onClick={handleClose}>Mobile Hair and Makeup</MenuItem>
                    </Link>
                    <Link prefetch={false} href={'/mobile-bridal-hair-and-make'}>
                      <MenuItem onClick={handleClose}>Bridal Services</MenuItem>
                    </Link>
                    <Link prefetch={false} href={'/formal-hair-and-makeup-gold-coast'}>
                      <MenuItem onClick={handleClose}>Formal Services</MenuItem>
                    </Link>
                  </StyledMenu>
                </li>
                <li>
                  <Link prefetch={false} href='/about'><a className={router.pathname === '/about' ? classes.active : ''}>About Us</a></Link>
                </li>
                <li>
                  <Link prefetch={false} href='/blog'><a className={router.pathname === '/blog' ? classes.active : ''}>Blog</a></Link>
                </li>
                <li>
                  <Link prefetch={false} href='/pricing'><a className={router.pathname === '/pricing' ? classes.active : ''}>Pricing</a></Link>
                </li>
                <li>
                  <Link prefetch={false} href='/contact'><a className={router.pathname === '/contact' ? classes.active : ''}>Contact</a></Link>
                </li>
              </ul>
            </nav>
          }
        </Col>
        <Col lg={2} style={{textAlign: 'right'}} className="d-none d-lg-flex">
          { router.pathname !== '/online-bookings' && router.pathname !== '/formal-booking' && router.pathname !== '/makeup-palace-bridal-bookings' &&
            <Link prefetch={false} href={bookNowUrl}><a className={`button ${classes['book-btn']}`}>Book Now</a></Link>
          }
        </Col>
        <Col lg={2} md={6} sm={8} xs={8} style={{textAlign: 'right'}} className={`d-flex d-lg-none ${classes.hamburgerRow}`}>
          { router.pathname !== '/online-bookings' && router.pathname !== '/formal-booking' && router.pathname !== '/makeup-palace-bridal-bookings' &&
            <>
              <Link prefetch={false} href={bookNowUrl}><a className={`button ${classes.book_btn}`} style={{fontSize: 14}}>Book Now</a></Link>
              <HamburgerMenu />
            </>
          }
        </Col>
      </Row>
    </header>
  );
}

export default MainNavigation;
