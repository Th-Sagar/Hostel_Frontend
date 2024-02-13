import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'

const Banner = () => {
  return (
    <section className="relative bg-[url('public/images/herobg.jpg')] rounded-xl bg-no-repeat bg-cover ">
    <section className="flex justify-between md:flex-row flex-col">
      <div className="flex flex-col justify-center gap-6 items-center md:w-1/2 pl-10 pt-24 ">
        <h1 className="text-white text-xl font-bold ">
          Find Hostels all over Nepal
        </h1>
        <div className=" bg-white rounded-3xl flex p-1 shadow ">
          <input
            className="pl-4 rounded-2xl outline-none"
            type="text"
            placeholder="Start your search.."
          />
          <FaSearchLocation className="search" />
        </div>
      </div>
      <div className=" md:w-1/2 flex pt-10  md:pt-16 md:left-16 relative justify-center items-center ">
        <img
          src="/images/hostelimg.png"
          className="w-3/4  "
          alt=""
        />
      </div>
    </section>
  </section>
  )
}

export default Banner