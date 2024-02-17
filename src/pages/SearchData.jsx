import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchHostel } from "../features/UserDetailSlice";

const SearchData = () => {
  const { searchItem } = useSelector((state) => state.userDetail);
  const {search} = useParams()

  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(searchHostel(search))
    
    


    
  }, [search]);

  
  if (!searchItem) {
    return <div>No hostel data available</div>;
  }

  if (!searchItem.hostel) {
    return <div>No hostel data available</div>;
  }
  return (
    <div className="text-black font-bold">
      <h2>Hostel Details:</h2>
      {(searchItem.hostel).map((hostel, index) => {
        return (
          <div key={index}>
            <p>Contact: {hostel.hostelContact}</p>
           
          </div>
        );
      })}
    </div>
  );
};

export default SearchData;
