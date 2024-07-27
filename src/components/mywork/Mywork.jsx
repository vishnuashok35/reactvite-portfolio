import React from 'react'
import './Mywork.css'
import Mywork_Data from '../../assets/Mywork-List'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="work-title">
            My work
        </div>
        <div className="mywork-container">
            {Mywork_Data.map((work,index)=>{
                return <div key={index} >
                    <img className='work-img' src={work.w_img} alt="" />
                    <p className='workname'>{work.w_name}</p>
                </div>
                
            })}
        </div>
        <div className='mywork-showmore'>
           <p>showmore</p>
        </div>
    </div>
  )
}

export default Mywork