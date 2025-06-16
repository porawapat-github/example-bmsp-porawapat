import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const ImageJapan = () => (
  <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
    <div>
      <img
        src='https://images5.alphacoders.com/137/thumbbig-1370955.webp'
        alt='Image 1'
        className='w-full h-130 rounded-2xl object-cover'
       />
    </div>
    <div>
      <img
        src='https://images7.alphacoders.com/772/thumbbig-772910.webp'
        alt='Image 2'
        className='w-full h-130 rounded-2xl object-cover'
       />
    </div>
    <div>
      <img
        src='https://images4.alphacoders.com/130/thumbbig-1301684.webp'
        alt='Image 3'
        className='w-full h-130 rounded-2xl object-cover'
       />
    </div>
    <div>
      <img
        src='https://images2.alphacoders.com/132/thumbbig-1327494.webp'
        alt='Image 4'
        className='w-full h-130 rounded-2xl object-cover'
       />
    </div>
  </Carousel>
);
export default ImageJapan;