import React from 'react'
import IMG from '../img/ad.svg';

export default function ({show}) {
  if (show) {
    return (
        <div>
            <img src={IMG} alt="광고"/>
        </div>
      )
  }
  else {
    return null;
  }
}
