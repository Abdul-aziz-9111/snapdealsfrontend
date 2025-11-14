import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='topnavbar' style={{display:'flex',height:'30px',backgroundColor:'#c00030ff',justifyContent:'space-between',alignItems:'center'}}>
      <h5 style={{fontSize:'13px',marginLeft:'4%',color:'white'}}>India's Leading online shopping destination</h5>
   <div className='content' style={{fontSize:'13px',color:'white',marginRight:'6%',gap:'10px',display:'flex'}}>
    <h5>Our Blog</h5>
    <h5>help center</h5>
    <h5>Sell on snapdeals</h5>
    <h5>download app</h5>
   </div> 
    </div>
    
    <div className='navbar z-20 flex items-center' style={{position:'sticky',top:'0',backgroundColor:'#E40046',minHeight:'50px',minWidth:'98vw'}}>
      <img style={{marginLeft:'3.7%',height:'30px',width:'142px'}} src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" alt="" />
      <input className='bg-white' style={{paddingLeft:'16px',marginLeft:'4.8%',height:'33px',width:'36vw'}} type="text" placeholder='Search Products & brands' /> 
    
    <button className='bg-black text-white' style={{height:'33.2px',width:'86px'}}>Search</button>
    <div className='icons flex items-center text-white' style={{marginLeft:'12%',width:'20vw'}}>
      <h5 style={{marginLeft:'20%',fontSize:'18.5px'}}>Cart</h5>
      <i style={{marginLeft:'2%',fontSize:'16px',marginTop:'3px'}} class="fa-solid fa-cart-shopping"></i>   

      <h5 style={{marginLeft:'20%',fontSize:'18.5px'}}>sign in</h5>
      
<i style={{fontSize:'20px',marginLeft:'3%'}} class="fa-solid fa-user-circle"></i>
   <div className='icons' style={{display:'none'}}>
     <i id='heart' className="fa-regular fa-heart"></i>    
 <i id="logo" class="fa-solid fa-language"></i>
   <i id='logo' className='fa-solid fa-square-plus'></i>
    </div>

    </div>
    </div>
   <div className='navbartwo' style={{display:'none'}}>
    <input type="text" style={{border:'1px solid black',height:'45px',paddingLeft:'20px'}} placeholder='Search For Products Brands and More' />
  
   </div>
<div className='contenttwo' style={{display:'none'}}>
  <p>Recently Viewed Products</p>
  <span id="view">VIEW ALL</span>
  </div>
  
   <div className='boxtwo' style={{display:'none'}}>

    <div className='box'>
      <img src="https://g.sdlcdn.com/imgs/k/8/t/Abrexo-Black-Stainless-Steel-Analog-SDL895358079-1-1b539.jpg?w=220&h=258&sharp=7" alt="" />
    </div>
    <div className='box'>
          <img src="https://g.sdlcdn.com/imgs/k/6/2/VERONIC-T110-Truly-Wireless-in-SDL888939711-1-c91e0.jpg?w=220&h=258&sharp=7" alt="" />
  
    </div>
    <div className='box'>
          <img src="https://g.sdlcdn.com/imgs/l/b/f/Neckband-Wireless-Headphones-with-Extended-SDL037496291-1-4613f.png?w=220&h=258&sharp=7" alt="" />
  
    </div>
    <div className='box'>
            <img src="https://g.sdlcdn.com/imgs/l/b/j/DENVER-Pride-Perfume-Premium-Long-SDL180006641-1-c9c01.jpg?w=220&h=258&sharp=7" alt="" />
  
    </div>
  
    <div className='box'>
          <img src="https://g.sdlcdn.com/imgs/l/b/0/BIG-WINGS-Shock-Proof-Case-SDL074641980-1-9014f.jpg?w=220&h=258&sharp=7" alt="" />
  
    </div>
    
   </div>
   <div className='bottomnavbar' style={{bottom:'0px',backgroundColor:'red',height:'20px',display:'none'}}>
     <div className='content'>
      <i id="home" className="fa-solid fa-house"></i>
  <p>Home</p>
  </div>
 <div className='content'>
    
  <i id="second" className="fa-solid fa-th-large"></i>
  <p>CATEGORIES</p>
  </div>
 
  <div className='content'>
     
  <i className="fa-solid fa-cart-shopping"></i>
  <p>CART</p>
  </div>
 
  <div className='content'>
     
  <i id='profile' className="fa-solid fa-user"></i>
  <p>PROFILE</p>
  </div>
  
   </div>
    </>
    
  )
}

export default Navbar