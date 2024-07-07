import React from 'react'
import {images}  from '../constants'

const Home = () => {
  return (
    <div>
        <div className='flex flex-col h-full w-screen'>
            <div className='w-screen h-30 flex justify-center items-center py-1'>
                <img className='h-24 w-24 object-cover' src={images.logo} alt='no image' />
            </div>
            <div className='border-b-4 border-indigo-500'></div>
            <div className='h-6 w-100 text-2xl text-center'><h3 className='capitalize text-green-600' >sokoine university of agriculture</h3></div>
            <div className='h-48 w-screen flex justify-center items-center py-6'>
                <img className='h-full w-30 object-cover' src={images.pass} alt='no image found'/>
            </div>
            <div className='flex flex-col text-center'>
                <p>Student RegNo: <span className='font-bold'>BCD/D/2022/0172</span></p>
                <p>This Exam Ticket is valid until:-: <span className='font-bold'>2024-07-17</span></p>
            </div>
        </div>
    </div>
  )
}

export default Home