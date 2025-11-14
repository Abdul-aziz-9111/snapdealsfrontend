import React from 'react'
import { useState } from 'react';
import './Content.css'
const Content = () => {
    const [amount,setAmount] = useState(1);
  const checkoutHandler = async()=>{
    const res= await fetch('http://10.211.220.193:4000/order',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({amount})
    })
    const order= await res.json();
    const options = {
      key:"rzp_test_RfTkoudi2nalgo",
      amount: order.amount,
      currency:order.currency,
      name:"RAZORPAY website",
      description:"Razorpay Test",
      order_id:order.id,
      handler:(response)=>{
        alert("Payment Successfull. Payment ID "+ response.razorpay_payment_id)
      },
      prefill: {name:"Abdul Aziz Nagori",email:"abdulaziz09673@gmail.com",contact:"9111925896"},
      theme:{color:"#5078ffff"}


    }
    const rzp = new window.Razorpay(options);
    rzp.open();
  }


  return (
    <div style={{marginLeft:'7px'}}>       
        <h5>Free Delivery On All Orders</h5>
        <h1 style={{fontSize:'16px',fontWeight:'bold',color:'#524f4f'}}>UDDO ARIES IN-the-ear Bluetooth Headset with <br/>Upto 30h talktime Deep Bass Blue</h1>
    <div className='flex'>
        <h1 style={{fontWeight:'bold',color:'black'}}>Rs 299</h1>
        <h2>&nbsp;&nbsp;MRP 999</h2>
        <h4>&nbsp;&nbsp;70% OFF</h4>
         </div>
         <div className='flex'>
        <h6>Rs 299</h6>
        <h5>3.8 (40)</h5>
        <h5>2 Reviews</h5>
        <h4>Quantity</h4>
        </div>
        <div className='flex' style={{marginTop:'3%'}}>
        <button style={{borderRadius:'7px',backgroundColor:'#0e9690',color:'white',width:'169px',height:'50px'}} id="b">Buy On App Rs 171</button>
        &nbsp;<button onClick={checkoutHandler} style={{borderRadius:'7px',backgroundColor:'#b8062c',color:'white',width:'169px',height:'50px'}} id="b">Buy Now</button>
       </div>
           </div>
  )
}

export default Content