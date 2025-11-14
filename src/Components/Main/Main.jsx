import React from 'react'
import './Main.css'
import thumb from '../../assets/tmb.png'
import iam from '../../assets/im.png'
const Main = () => {
  return (
    <>
    <div  className='main flex flex-col' style={{height:'47.3vh',width:'55vw',marginLeft:'1%',marginTop:'0.6%'}}>
        <img id="big" style={{height:'40vh',width:'100vw'}} src={thumb} alt="" />
   <div className='content flex justify-center items-center gap-17 bg-white text-black' style={{height:'41.4px',width:'auto'}}>
    <h1>Shop Now</h1>
    <h1>Shop Now</h1>
    <h1>Shop Now</h1>
    <h1>Shop Now</h1>
    <h1 style={{borderBottom:'2px solid black'}}>Shop Now</h1>
  </div>



   
    </div>
   <div className='mapbox' style={{backgroundColor:'white',marginTop:'0.7%',marginLeft:'1.2%',height:'47vh',width:'18vw',border:'1px  solid white'}}>
    <img style={{marginTop:'2%'}} src={iam} alt="" />
    <p style={{marginTop:'-1%',fontSize:'11.4px',marginLeft:'5%'}}>Enter your pincode to check availability <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and faster delivery options</p>
  <input type="text" placeholder='Enter Pincode' style={{border:'1px solid black',marginTop:'3%',marginLeft:'4%',fontSize:'14px',width:'16.3vw',paddingLeft:'6px',height:'33px'}} />
   <div style={{marginTop:'3.4%',marginLeft:'4.5%'}}>
    <button style={{height:'31px',backgroundColor:'black',color:'white',padding:'2px 35px',borderRadius:'4px'}}>SUBMIT</button>
   &nbsp; <button className='bg-gray-200' style={{color:'black',padding:'2px 14px'}}>NEXT</button>
   </div>
   </div>
 
  </>
    
  )
}

export default Main