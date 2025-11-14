import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
import Products from './Components/Products/Products'
import Box from './Components/Box/Box'
import Hero from './Components/Hero/Hero'
import Items from './Components/Items/Items'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Product from './Components/Product/Product'
const App = () => {
  return (
    <div>

 <Router>
  <Routes>
        <Route
            path="/"
            element={
              <>
                <Navbar />
                <div
                  className="parent"
                  style={{ height: '300vh', backgroundColor: '#F7F7F7' }}
                >
                  <div className="flex">
                    <Sidebar />
                    <Main />
                  </div>
                  <Products />
                  <Box />
                  <Hero />
                  <Items />
                </div>
              </>
            }
          />
          <Route path="/imageone" element={<Product 
          image="https://g.sdlcdn.com/imgs/k/y/t/Vertical9-Mini-Wireless-5-W-SDL825474351-1-3d3de.jpg" 
          />} />
          <Route path="/imagetwo" element={<Product 
          image="https://g.sdlcdn.com/imgs/l/b/2/M19-Earbud-TWS-Wireless-in-SDL832312273-1-d66a5.png" 
          />} />
          <Route path="/imagethree" element={<Product 
          image="https://g.sdlcdn.com/imgs/k/8/3/Fadiso-Fashion-Black-Charm-Bracelet-SDL284164717-1-11b2c.jpg" 
          />} />
          <Route path="/imagefour" element={<Product 
          image="https://g.sdlcdn.com/imgs/k/w/t/Abrexo-Silver-Stainless-Steel-Analog-SDL148794784-1-4ce68.jpg" 
          />} />
          <Route path="/imagefive" element={<Product 
          image="https://g.sdlcdn.com/imgs/l/b/j/DENVER-Hamilton-Perfume-Premium-Long-SDL446210399-1-81a2e.jpg" 
          />} />
          <Route path="/imagesix" element={<Product 
          image="https://g.sdlcdn.com/imgs/k/v/8/Case-Vault-Covers-Shock-Proof-SDL623944357-1-ac1a2.jpg" 
          />} />
          <Route path="/imageseven" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/2/z/POKHINDA-Slim-Fit-Basic-Men-SDL902898842-1-8a96a.jpg?w=220&h=258&sharp=7" 
          />} />
          <Route path="/imageeight" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/z/n/nikline-Polyester-Men-s-Puffer-SDL836987609-1-d607d.jpg" 
          />} />
          
           <Route path="/imagenine" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/3/3/SUNTAP-Engineered-Thar-Car-Toy-SDL416279678-1-3b585.jpg" 
          />} />
          
           <Route path="/imageten" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/2/s/OMRON-BAGS-Black-Polyester-Backpack-SDL868275619-1-839c7.jpg" 
          />} />
            <Route path="/imageeleven" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/5/l/uzak-Multicolor-Square-Sunglasses-Pack-SDL802383215-1-04fc4.jpg" 
          />} />
          <Route path="/imagetwelve" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/5/l/uzak-Multicolor-Square-Sunglasses-Pack-SDL802383215-1-04fc4.jpg" 
          />} />
          <Route path="/imagethirteen" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/l/b/h/Denver-Pride-Caliber-Honour-Imperial-SDL283922221-1-c333d.jpg" 
          />} />
          <Route path="/imagefourteen" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/e/6/Mikado-Silver-Metal-Bracelet-Ring-SDL296646917-1-1f7b3.jpg" 
          />} />
          <Route path="/imagefifteen" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/r/7/DAJUBHAI-DJ-LED-Par-Flood-SDL823425455-1-ad322.jpg" 
          />} />
          <Route path="/imagesixteen" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/9/j/SKYRISE-MINI-RECHARGEABLE-FOLDING-TABLE-SDL243239881-1-d6234.jpg" 
          />} />
          <Route path="/imageseventeen" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/z/y/Nivea-Deep-Impact-Fresh-Active-SDL364275671-1-7ece2.jpg?w=220&h=258&sharp=7" 
          />} />
          <Route path="/imageeightteen" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/z/1/Try-This-Cotton-Blend-Hooded-SDL732669059-1-2f897.jpg" 
          />} />
          <Route path="/imagenineteen" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/y/m/Cycle-Fancy-Tyre-Light-Tyre-SDL106184108-1-d4ed4.jpg" 
          />} />
          <Route path="/imagetwenty" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/j/t/m/Aimil-Memtone-Syrup-Ayurvedic-Medicine-SDL574778394-1-edae1.jpg" 
          />} />
          <Route path="/imagetwentyone" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/k/4/z/let-light-3W-Rechargeable-Flashlight-SDL950977296-1-471b9.jpg" 
          />} />
          <Route path="/imagetwentytwo" style={{
          }} element={<Product 
          image="https://g.sdlcdn.com/imgs/j/s/s/Campus-MIKE-N-Maroon-Running-SDL097540987-1-d7db2.jpeg" 
          />} />
          <Route path='/imagetwentythree' style={{

          }} element={<Product 
            image="https://g.sdlcdn.com/imgs/j/r/e/Krosshorn-Faux-Leather-Brown-Formal-SDL494074979-1-bd4a7.jpg"
           />}/>
           <Route path='/imagetwentyfour' style={{}}
           element={<Product image=
            "https://g.sdlcdn.com/imgs/k/6/n/SKYVILLA-Dual-Tip-Colorful-Art-SDL083448407-1-c316d.jpg"/>}/>
            <Route path='/imagetwentyfive' style={{}}
            element={<Product
             image="https://g.sdlcdn.com/imgs/k/5/m/Kraftsman-Wooden-Chess-Board-Big-SDL779692422-1-b001f.jpeg"
            />}/>
          <Route path='/imagetwentysix' style={{}}
          element={<Product 
          image="https://g.sdlcdn.com/imgs/k/4/7/VS-MALL-Black-Cotton-Blend-SDL362757719-1-9b430.jpg"/>}/>
          <Route path='/imagetwentyseven' style={{}}
          element={<Product
          image="https://g.sdlcdn.com/imgs/k/0/u/52dealz-Cotton-Blend-Men-s-SDL811738012-1-4d6fa.jpg"/>}/>
          <Route path='/imagetwentyeight' style={{}} 
          element={<Product
          image="https://g.sdlcdn.com/imgs/k/7/g/Remote-Control-Car-For-Kids-SDL575349622-1-ac865.jpg"
          />}/>
          <Route path='/imagetwentynine' style={{}}
          element={<Product 
          image="https://g.sdlcdn.com/imgs/k/2/0/Bullet-2-Metal-Big-Size-SDL801092986-1-49cac.jpeg"/>} />
          <Route path='/imagethirty' style={{}}
          element={<Product
          image="https://g.sdlcdn.com/imgs/k/7/j/geemy-Hair-Cutting-Green-Cordless-SDL838561452-1-caee4.jpg"/>}/>
          <Route path='/imagethirtyone' style={{}}
          element={<Product
          image="https://g.sdlcdn.com/imgs/k/u/4/Blue-Eagle-Mini-Diamond-500-SDL064072498-1-38a32.jpg"/>}/>
          <Route path='/imagethirtytwo' style={{}}
          element={<Product
          image="https://g.sdlcdn.com/imgs/i/6/z/Treo-By-Milton-Campa-Pop-SDL544946017-1-613c3.jpeg"/>}/>
          <Route path='/imagethirtythree' style={{}}
          element={<Product
          image="https://g.sdlcdn.com/imgs/i/6/z/Treo-By-Milton-Campa-Pop-SDL544946017-1-613c3.jpeg"/>}/>
          <Route path='/imagethirtyfour' style={{}}
          element={<Product
          image="https://g.sdlcdn.com/imgs/i/6/z/Treo-By-Milton-Campa-Pop-SDL544946017-1-613c3.jpeg"/>}/>
          
      </Routes>
      </Router>
    </div>
  )
}

export default App