import React from "react";
import Button from "./Button";
import { RxCrossCircled } from "react-icons/rx";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/UserDetailSlice.jsx";
import { hostelSchema } from "../Schemas/hostelSchemas.jsx";

const RegisterHostel = ({ handleHostel }) => {
  const initialValues = {
    hostelName: "",
    hostelLocation: "",
    hostelPrice: "",
    hostelDescription: "",
    hostelImage: "",
    hostelRating: "",
    hostelContact: "",
  };
  const dispatch = useDispatch();

  const { values, errors, handleBur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: hostelSchema,
      onSubmit: (values, action) => {
       console.log(values)
        action.resetForm();
      },
    });
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-30  ">
      <div className="container flex justify-center items-center w-full">
        <div className=" rounded-2xl bg-white p-4 flex justify-between items-center w-4/5 md:w-2/3 lg:w-[50rem] py-16 relative">
          <div className="absolute top-0 right-0 m-4">
            <RxCrossCircled
              size={20}
              className="hover:scale-110 transition-all ease-in duration-300"
              onClick={handleHostel}
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
            <h2 className=" font-bold text-2xl mb-10">Hostel Register</h2>
            <form id="register" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="pt-2 font-bold">Hostel Name</label>
                <input
                  type="text"
                  className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                  placeholder="Hostel Name "
                  name="hostelName"
                  id="hostelName"
                  value={values.hostelName}
                  onChange={handleChange}
                  onBlur={handleBur}
                />
                {errors.hostelName && touched.hostelName ? (
                  <p className="text-red-600 italic">{errors.hostelName}</p>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label className="pt-2 font-bold">Hostel Location</label>
                <input
                  type="text"
                  className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                  placeholder="Hostel Location "
                  name="hostelLocation"
                  id="hostelLocation"
                  value={values.hostelLocation}
                  onChange={handleChange}
                  onBlur={handleBur}
                />
                {errors.hostelLocation && touched.hostelLocation ? (
                  <p className="text-red-600 italic">{errors.hostelLocation}</p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label className="pt-2 font-bold">Hostel Price</label>
                <input
                  type="number"
                  className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                  placeholder="Hostel Price "
                  name="hostelPrice"
                  id="hostelPrice"
                  value={values.hostelPrice}
                  onChange={handleChange}
                  onBlur={handleBur}
                />
                {errors.hostelPrice && touched.hostelPrice ? (
                  <p className="text-red-600 italic">{errors.hostelPrice}</p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label className="pt-2 font-bold">Hostel Image</label>
                <input
                  type="text"
                  className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                  placeholder="Hostel Image "
                  name="hostelImage"
                  id="hostelImage"
                  value={values.hostelImage}
                  onChange={handleChange}
                  onBlur={handleBur}
                />
                {errors.hostelImage && touched.hostelImage ? (
                  <p className="text-red-600 italic">{errors.hostelImage}</p>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label className="pt-2 font-bold">Hostel Rating</label>
                <input
                  type="text"
                  className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                  placeholder="Hostel Rating "
                  name="hostelRating"
                  id="hostelRating"
                  value={values.hostelRating}
                  onChange={handleChange}
                  onBlur={handleBur}
                />
                {errors.hostelRating && touched.hostelRating ? (
                  <p className="text-red-600 italic">{errors.hostelRating}</p>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label className="pt-2 font-bold">Hostel Contact</label>
                <input
                  type="text"
                  className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                  placeholder="Hostel Contact "
                  name="hostelContact"
                  id="hostelContact"
                  value={values.hostelContact}
                  onChange={handleChange}
                  onBlur={handleBur}
                />
                {errors.hostelContact && touched.hostelContact ? (
                  <p className="text-red-600 italic">{errors.hostelContact}</p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label className="pt-2 font-bold">Hostel Description</label>
                <textarea
                  name="hostelDescription"
                  id="hostelDescription"
                  cols="30"
                  rows="5"
                  className="py-2 outline-none border-b-2 focus:border-b-2 focus:border-blue-500 transition-all ease-in duration-300"
                  placeholder="Hostel Description.."
                  value={values.hostelDescription}
                  onChange={handleChange}
                  onBlur={handleBur}
                ></textarea>
                {errors.hostelDescription && touched.hostelDescription ? (
                  <p className="text-red-600 italic">{errors.hostelDescription}</p>
                ) : null}
              </div>
              <Button
                width={"w-2/3"}
                bg={
                  " bg-[#ff385c] text-white   hover:bg-white hover:text-[#ff385c]"
                }
                title={"Sign Up"}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterHostel;
