import React from 'react'

const Tracks = () => {
  return (
    <div className='py-10 text-gray'>
        <div className="text-center mt-14">
        <h3 className="text-gray-600 font-semibold text-5xl">
          Conference <span className="text-[#3FBA96]">Tracks</span>
        </h3>
      </div>
      <div className='flex flex-1 mt-4 mx-32'>
        <div className='md:text-left text-center mt-28'>
            <h3 className='md:text-3xl text-2xl md:leading-normal leading-10 text-[#A8271A] font-bold'>
                Track - 1
            </h3>
            <p className='text-gray-600'>Artificial Intelligence, Machine Learning & Data Science</p>
        </div>
      </div>
    </div>
  )
}

export default Tracks