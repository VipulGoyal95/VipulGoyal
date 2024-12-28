import React from 'react'
import "./viewdetails.css";
const Viewdetails = (props) => {
  return (
    <div className='project__div'>
        <h3 className='project__title'>{props.title}</h3>
        <p className="project__description">
            {props.description}
        </p>
        <div className="project__links">
            <a href="" className='project__link'>
                View Demo <i className="ri-arrow-left-line"></i>
            </a>
        </div>
    </div>
  )
}

export default Viewdetails