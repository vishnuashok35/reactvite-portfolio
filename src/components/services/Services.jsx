import React from 'react'
import './Services.css'
import Service_Data from '../../assets/services-data'
import arrow from '../../assets/arrow.svg'
const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
           My services
        </div>
        <div className="service-container">
            {Service_Data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="service-readmore">
                       <p>Read more</p>
                       <img className='amb' src={arrow} alt="" />
                    </div>
                </div>
            })}
            
        </div>
    </div>
  )
}

export default Services