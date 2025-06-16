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
        src='https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHx8MHx8fDA%3D'
        alt='Image 1'
        className='w-full h-130 rounded-2xl object-cover'
       />
    </div>
    <div>
      <img
        src='https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW58ZW58MHx8MHx8fDA%3D'
        alt='Image 2'
        className='w-full h-130 rounded-2xl object-cover'
       />
    </div>
    <div>
      <img
        src='https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW58ZW58MHx8MHx8fDA%3D'
        alt='Image 3'
        className='w-full h-130 rounded-2xl object-cover'
       />
    </div>
    <div>
      <img
        src='https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D'
        alt='Image 4'
        className='w-full h-130 rounded-2xl object-cover'
       />
    </div>
  </Carousel>
);
export default ImageJapan;