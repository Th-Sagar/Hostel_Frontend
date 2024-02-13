import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="container  py-4 sticky top-0  bg-white z-50 border rounded-lg shadow-lg">
        <main className="flex justify-between">
          <div className="p-2">

            <NavLink className="pointer" to="/">
              <img src="/images/hostel.png" alt="Hostel " width="20px " />
            </NavLink>
          </div>

          <div className="border rounded-3xl flex p-1 shadowin ">
            <input
              className="pl-4 outline-none"
              type="text"
              placeholder="Start your search.."
            />
            <FaSearchLocation className="search" />
          </div>

          <div className="md:flex gap-3 hidden">
            <ul className="lg:flex gap-4 hidden text-center p-2 justify-center items-center">
              <li className="pointer font">
                <NavLink to="/about">
                About
                </NavLink>
              </li>
              <li className="pointer font"> <NavLink to="/blog">
                Blog
                </NavLink></li>
              <li className="pointer font"> <NavLink to="/contact">
                Contact
                </NavLink></li>
            </ul>
            <ul className="flex gap-2">
              <li className="font-semibold border p-2 rounded-xl shadowin pointer">
                Host your hostel
              </li>
              <li className="p-2 rounded-xl shadowin pointer">
                <div className="flex gap-2 p-2 ">
                  <IoMdPerson />
                  <RxHamburgerMenu />
                </div>
              </li>
            </ul>
          </div>
        </main>
      </section>
    </>
  );
};

export default Navbar;
