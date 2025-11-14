import React from 'react'
import './Box.css'
import barcode from '../../assets/b.png'
const Box = () => {
  return (
    <div className='box' style={{backgroundColor:'white',display:'flex',marginLeft:'3.3%',height:'18.6vh',width:'15.3vw',marginTop:'-7%'}}>
        
      <img style={{marginLeft:'2px',marginTop:'6.6%',height:'75px',width:'70px'}} src={barcode} alt="" />
    <div style={{marginLeft:'6px',marginTop:'9.3%'}}>
  <p style={{fontSize:'13px'}}>Enjoy Convinient <br/> Order Traking</p>
  <p className='text-gray-800' style={{fontSize:'10.5px',whiteSpace:'nowrap'
  ,marginTop:'3.5px'}}>Scan To Download App</p>
  
</div>
  </div>
  )
}

export default Box