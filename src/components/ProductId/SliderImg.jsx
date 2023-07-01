import React, { useState } from 'react'
import "./styles/SliderImg.css"

const SliderImg = ({product}) => {

    const [indexImg, setIndexImg] = useState(0)

    const styMovible = {
        transform:`translateX(calc((-${indexImg } / 3) * 100%))`
    }


    
    const handlePrevious = () => {
        if(indexImg - 1 >= 0){
            setIndexImg(indexImg - 1)
        } else {
            setIndexImg(2)
        }
    }

    const handleNext = () => {
        if(indexImg + 1 <= 2){
            setIndexImg(indexImg + 1)
        } else {
            setIndexImg(0)
        }
    }

  return (
    <>
    <div className='slider'>
      <button onClick={handlePrevious} className='slider__btn slider__left'>&lt;</button>
        <div style={styMovible} className='slider__movible'>
            {
                product?.images.map(imgInfo =>(
                    <div className='slider__img-container' key={imgInfo.id}>
                        <img className='slider__img' src={imgInfo.url} alt="" />
                    </div>
                ))
            }
        </div>
      <button onClick={handleNext} className='slider__btn slider__right'>&gt;</button>
    </div>
    <div className='slider__footer-container'>
        <div className='slider__footer'>
            {
                product?.images.map((imgInfo, i) =>(
                    <div
                     className={`slider__footer-img-container
                      ${i === indexImg && "slider__img-active"}`}
                       key={imgInfo.id} onClick={()=> setIndexImg(i)}>
                        <img className='slider__img' src={imgInfo.url} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
    </>
  );
}; 

export default SliderImg