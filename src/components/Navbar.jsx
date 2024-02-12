import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className=" container  border border-black py-4">
        <main className="flex justify-between">
          <div>
            <NavLink to="/">
              <img src="/images/hostel.png" alt="Hostel " width="20px " />
            </NavLink>
          </div>

          <div className=" border rounded-3xl  flex p-1">
            <input className="pl-4 outline-none" type="text" placeholder="Start your search.." />
            <FaSearchLocation className="h-full  bg-[#ff385c] text-white rounded-[50%] w-full p-[0.5rem] text-center size-[1rem] hover:bg-white hover:text-[#ff385c] transition-all ease-in duration-500"  />
          </div>

          <div className="flex gap-3  ">
            <ul className="lg:flex gap-4 hidden text-center  p-2 ">
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <ul className="flex gap-2">
              <li className="font-semibold border p-2 rounded-xl hover:shadow-lg transition-all ease-in duration-300">Host your hostel</li>
              <li className="p-2">login</li>
            </ul>
          </div>
        </main>
      </section>
    </>
  );
};

export default Navbar;
