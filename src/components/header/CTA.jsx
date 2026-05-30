import React from 'react'
import CV from '../../assets/BhushanMali_Java_GCP_6Years.pdf'
import { Link } from "react-router-dom";
const CTA = () => {

  return (
    
    <div className="cta">

        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
                <Link
  to="/knowledge"
  className="btn btn-primary"
>
  📚 Knowledge Hub
</Link>
    </div>
  )
}

export default CTA