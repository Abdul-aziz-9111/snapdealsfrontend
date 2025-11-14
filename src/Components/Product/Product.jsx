import React from 'react'
import './Product.css'
import Content from '../Content/Content'
const Product = ({image,image1}) => {
  return (
  <div>
    <div className='navbar z-20 flex items-center sticky' style={{position:'sticky',top:'0',backgroundColor:'#E40046',height:'50.53px',width:'100vw'}}>
      <img style={{marginLeft:'3.7%',height:'30px',width:'142px'}} src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" alt="" />
      <input className='bg-white' style={{paddingLeft:'16px',marginLeft:'4.8%',height:'33px',width:'36vw'}} type="text" placeholder='Search Products & brands' /> 
    
    <button className='bg-black text-white' style={{height:'33.2px',width:'86px'}}>Search</button>
    <div className='icons flex items-center text-white' style={{marginLeft:'12%',width:'20vw'}}>
      <h5 style={{marginLeft:'20%',fontSize:'18.5px'}}>Cart</h5>
      <i style={{marginLeft:'2%',fontSize:'16px',marginTop:'3px'}} class="fa-solid fa-cart-shopping"></i>   

      <h5 style={{marginLeft:'20%',fontSize:'18.5px'}}>sign in</h5>
      
<i style={{fontSize:'20px',marginLeft:'3%'}} class="fa-solid fa-user-circle"></i>
   <div className='icons' style={{display:'none'}}>
     <i id='ek'  className="fa-regular fa-heart"></i>    
 <i id="ela" class="fa-solid fa-language"></i>
   <i id='new' className='fa-solid fa-square-plus'></i>
    </div>

    </div>
    </div>
    <div className='image'>
    <img style={{display:'none'}} src={image} alt="" />
    
     </div>
     <Content />
      </div>
  )
}

export default Product