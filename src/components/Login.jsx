import React, { useState } from 'react'
import Button from './Button'
import { RxCrossCircled } from 'react-icons/rx'

const Login = ({handleCross,handleRegister}) => {
 
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-30  ">
    <div className="container flex justify-center items-center w-full">
      <div className=" rounded-2xl   bg-white p-4 flex justify-between items-center w-4/5 md:w-2/3 lg:w-[50rem] py-16 relative">
        <div className="absolute top-0 right-0 m-4">
          <RxCrossCircled
            size={20}
            className="hover:scale-110 transition-all ease-in duration-300"
            onClick={handleCross}
          />
        </div>
        <div className=" md:w-1/3 hidden md:flex  ">
          <img
            src="/images/pattern.jpg"
            className="rounded-2xl "
            width={150}
            alt=""
          />
        </div>
        <div className="w-full md:w-2/3 flex justify-center items-center flex-col ">
          <h2 className=" font-bold text-2xl mb-10">Sign in</h2>
          <form>
            <div className="flex flex-col">
              <label htmlFor="email" className="pt-2 font-bold">
                Email
              </label>
              <input
                type="email"
                className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                placeholder="Email "
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="pt-2 font-bold">
                Password
              </label>
              <input
                type="password"
                className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                placeholder="Enter your name "
              />
            </div>
            <Button
              width={"w-2/3"}
              bg={
                " bg-[#ff385c] text-white   hover:bg-white hover:text-[#ff385c]"
              }
            />

            <div className="pt-2">
              <h5 className="font-medium">
                Not a member?{" "}
                <span className="text-blue-500 cursor-pointer" onClick={handleRegister}>
                  Register here
                </span>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    
  )
}

export default Login