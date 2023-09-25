 import React from 'react'
 import './carousel.css'
 import pizza from "../images/pizza.jpeg"

function carousel() {
    let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1)        
    
        {l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){
            l = 0;
        }
		for(let i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	 //span[1].onclick = ()=>{right_mover();}
	 //span[0].onclick = ()=>{left_mover();}
  return (
    
   
          <>
          <div className="main">
           
          <div className="text">
              <h5 style={{color: "red", fontSize:"18px" , fontWeight:"600", letterSpacing:"2px"}}>Popular Restaurants Around you</h5>
          </div><header>
              <h1>30 Restaurants</h1>
              <p>
                  {/* <span onClick={left_mover}>&#139;</span> */}
                  {/* <span onClick={right_mover}>&#155;</span> */}
                  <span onClick={left_mover}>‹</span>
                 <span onClick={right_mover}>›</span>

              </p>
          </header>
          
          <div className="section">
          <div className="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div className="detail">
                  <p>
                      <b>Green Chilli</b><br />
                      <i className="fa fa-map-marker"> <small>Gunupur</small></i>
                      
                  </p>
                  <div className="ratting">
                  <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                      {/* <p style={{fontSize: "15px" ,color: "white"}}>*4.5</p> */}
                  </div>
              </div>

              <div className="time"> <i className="fa fa-clock-o"></i> 8:40am-9:50pm</div>


          </div><div className="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div className="detail">
                  <p>
                      <b>Green Chilli</b><br />
                     <i className="fa fa-map-marker"> <small>Gunupur</small></i>

                  </p>
                  <div class="ratting">
                  <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                      {/*  <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p> */}
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>

          </div><div class="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div class="detail">
                  <p>
                      <b>Green Chilli</b><br />
                      <i class="fa fa-map-marker"></i>
                      <small> Gunupur</small>
                  </p>
                  <div class="ratting">
                       <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>
          </div><div class="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div class="detail">
                  <p>
                      <b>Green Chilli</b><br />
                     <i className="fa fa-map-marker"> <small>Gunupur</small></i><br />
                  </p>
                  <div class="ratting">
                       <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>

          </div><div class="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div class="detail">
                  <p>
                      <b>Green Chilli</b><br />
                     <i className="fa fa-map-marker"> <small>Gunupur</small></i>
                  </p>
                  <div class="ratting">
                       <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>

          </div><div class="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div class="detail">
                  <p>
                      <b>Green Chilli</b><br />
                     <i className="fa fa-map-marker"> <small>Gunupur</small></i>
                  </p>
                  <div class="ratting">
                       <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>

          </div><div class="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div class="detail">
                  <p>
                      <b>Green Chilli</b><br />
                     <i className="fa fa-map-marker"> <small>Gunupur</small></i>
                  </p>
                  <div class="ratting">
                       <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>

          </div><div class="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div class="detail">
                  <p>
                      <b>Green Chilli</b><br />
                     <i className="fa fa-map-marker"> <small>Gunupur</small></i>
                  </p>
                  <div class="ratting">
                       <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>




          </div><div class="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div class="detail">
                  <p>
                      <b>Green Chilli</b><br />
                     <i className="fa fa-map-marker"> <small>Gunupur</small></i>
                  </p>
                  <div class="ratting">
                       <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>




          </div><div class="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div class="detail">
                  <p>
                      <b>Green Chilli</b><br />
                     <i className="fa fa-map-marker"> <small>Gunupur</small></i>
                  </p>
                  <div class="ratting">
                       <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>




          </div><div class="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div class="detail">
                  <p>
                      <b>Green Chilli</b><br />
                     <i className="fa fa-map-marker"> <small>Gunupur</small></i>
                  </p>
                  <div class="ratting">
                       <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>



          </div><div class="product">
              <picture>
                  <img src={pizza} alt="" />
              </picture>
              <div class="detail">
                  <p>
                      <b>Green Chilli</b><br />
                     <i className="fa fa-map-marker"> <small>Gunupur</small></i>
                  </p>
                  <div class="ratting">
                       <p style={{fontSize: '15px', color: 'white'}}>☆4.5</p>
                  </div>
              </div>
              <div class="time"><i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>

          </div>
          </div>
          </div>
          </>
        
     
    
  
  )
}

 export default carousel
// import React from 'react';
//import './carousel.css';

// function carousel() {
//   return (
//    <><div class="text">
//           <h5 style="color: red;font-weight: 600;">Popular Restaurants Around you</h5>
//       </div><header>
//               <h1>30 Restaurants</h1>
//               <p>
//                   <span>&#139;</span>
//                   <span>&#155;</span>
//               </p>
//           </header>
//               <div class="product">
//                   <picture>
//                       <img src={pizza} alt="" />
//                   </picture>
//                   <div class="detail">
//                       <p>
//                           <b>Green Chilli</b><br />
//                           <i class="fa fa-map-marker"></i>
//                           <small>Gunupur</small>
//                       </p>
//                       <div class="ratting">
//                           <p style="font-size: 15px; color: white">&star;4.5</p>
//                       </div>
//                   </div>

//                   <div class="time"> <i class="fa fa-clock-o"></i> 8:40am-9:50pm</div>


//               </div> </>
//               )
//               }

//               export default carousel
         
