import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
    setRegister(false);
  };
  const handleRegister = () => {
    setRegister(!register);
    setLogin(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleCross=()=>{
    setLogin(false);
    setRegister(false);
  }
  return (
    <>
      <section className="container  py-4 sticky top-0  bg-white z-10 border rounded-lg  ">
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
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="pointer font">
                {" "}
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="pointer font">
                {" "}
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <ul className="flex gap-2">
              <li
                className="font-semibold border p-2 rounded-xl shadowin pointer"
                onClick={handleLogin}
              >
                Host your hostel
              </li>
              <li
                className="p-2 rounded-xl shadowin pointer"
                onClick={toggleDropdown}
              >
                <div className="flex gap-2 p-2 ">
                  <IoMdPerson />
                  <RxHamburgerMenu />
                </div>
                {dropdownOpen && (
                  <div
                    className="fixed inset-0 top-24  left-[90%] lg:left-[92.27%] 
                  xl:left-[93.4%] text-center 2xl:left-[88.3%] w-32 lg:w-32 2xl:w-36 h-48 md:left-[87%] bg-white border rounded-xl shadow-lg"
                  >
                    <ul className="mt-4">
                      <li className="dropdown" onClick={handleRegister}>
                        Sign up
                      </li>
                      <li className="pt-2 dropdown" onClick={handleLogin}>
                        Sign in
                      </li>
                      <br />

                      <li className="dropdown" onClick={handleRegister}>Host your hostel</li>

                      <li className="pt-2 dropdown">Help</li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </main>
      </section>
      { login && (
        <Login handleCross={handleCross} handleRegister={handleRegister} />
      )}
      {register && (
        <Register handleCross={handleCross}  handleLogin={handleLogin} />
      )}
    </>
  );
};

export default Navbar;
