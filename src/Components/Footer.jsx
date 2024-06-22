import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font text-gray-500'>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src="./assets/Help-Avatar.svg" alt="Help" />
        <div>
          <p className='font-playfair font-thin'>Have any Questions?</p>
          <a href="#" className='font-lato font-medium'>Talk To a Specialist.</a>
        </div>      </div>
    </div>
  )
}
export default Footer