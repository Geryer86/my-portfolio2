import React from 'react';
import CV from '../assets/cv/CV_linkedIn.pdf';

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn btn-primary'>Download my CV</a>
    </div>
  )
}
