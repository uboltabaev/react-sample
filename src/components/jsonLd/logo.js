import { LogoJsonLd } from 'next-seo';

function LogoJSON(){
    return(
    <LogoJsonLd
      logo="https://makeuppalace.com.au/images/logo.png"
      url={process.env.NEXT_PUBLIC_URL}
    />
    )
}

export default LogoJSON;