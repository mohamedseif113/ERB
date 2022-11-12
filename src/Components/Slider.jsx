import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// to control in the next arrow

const PrevArrow = (props) => {
    
    const { onClick } = props;
    return (<>
        <div className='control' onClick={onClick}>
            <button className='bottons-control-prev'>
            <i class="fa-solid fa-angles-left"></i>   
            </button>
        </div>
  
    </>)
  
    
  
  }
// to control in the next arrow
const NextArrow = (props) => {
    
  const { onClick } = props;
  return (<>
      <div className='control' onClick={onClick}>
          <button className='bottons-control-next'>
          <i class="fa-solid fa-angles-right"></i>   
          
         </button>
      </div>

  </>)

}

const Sliders = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        appendDots:(dots)=>{
          return <ul style={{margin:"0"}}>{dots}</ul>
  
        },
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>
       
      };
  return (

    <>
      <Slider  {...settings}>
        <div className='home-slider'>
          <img src='../images/slider1.png' className='w-100'/>
        </div>
       
        <div>
          <img src='../images/slider1.png' className='w-100'/>
        </div>
      

      </Slider>
    </>
  )
}

export default Sliders