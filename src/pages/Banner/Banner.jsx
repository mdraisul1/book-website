import React from 'react'
import bannerImg from '../../assets/pngwing.png';

const Banner = () => {

  return (
    <div className='w-[1240px] bg-gray-200 mx-auto mt-8 mb-8 py-14 rounded-2xl'>
      <div className="flex items-center justify-center gap-20">
        <div className='space-y-5'>
          <h1 className="text-5xl text-[#131313] font-bold pb-6">
            Books to freshen up<br/> your bookshelf
          </h1>
          <button className="bg-[#23BE0A] px-5 py-3 text-2xl font-semibold text-white rounded-lg">View The List</button>
        </div>
        <div>
          <img className='w-65' src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner
