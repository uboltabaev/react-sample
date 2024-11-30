import Image from 'next/image';
import classes from './logo.module.css';

function Logo() {
  return <div className={classes.logo} id="logo-div"><Image src={'/images/logo.png'} layout="fill" objectFit="cover" id="logo" priority={true}/></div>;
}

export default Logo;
