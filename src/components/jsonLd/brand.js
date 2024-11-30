import React from 'react';
import { BrandJsonLd } from 'next-seo';

export default function Brand(){
 return(
    <BrandJsonLd
      slogan="Fit For A Queen?"
      id="https://www.purpule-fox.io/#corporation"
      logo="https://makeuppalace.com.au/images/logo.png"
      aggregateRating={{
        ratingValue: '5',
        ratingCount: '34',
      }}
    />
 )
 }