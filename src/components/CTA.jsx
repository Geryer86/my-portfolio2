import React from 'react';
import CVen from '../assets/cv/Resume.pdf';
import CVes from '../assets/cv/CV_linkedIn.pdf';

export const CTA = () => {
  return (
    <div>
    <div className='cta'>
      <a href={CVen} download className='btn btn-primary'>Download my CV</a>
    </div>
    <br></br>
    <div className='cta'>
    <a href={CVes} download className='btn btn-primary'>CV en Español</a>
  </div>
  </div>
  )
}
