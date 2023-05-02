import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeroIMG from "../assets/hero.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  return (
    <>
      <div className="text-[25px] font-semibold leading-[38px] text-[#18a7b9] tracking-[-0.06em]">
        CONSTRUCTION
      </div>
      <ul className="nav-items-bg flex text-[18px] pr-[134px] gap-9 leading-[27px] text-[#313131]">
        <li
          className={`hover:text-[#000] hover:cursor-pointer ${
            clicked ? "active" : ""
          }`}
          onClick={() => {
            setClicked(true);
            setClicked2(false);
            setClicked3(false);
            setClicked4(false);
          }}
        >
          Home
        </li>
        <li
          className={`hover:text-[#000] hover:cursor-pointer ${
            clicked2 ? "active" : ""
          }`}
          onClick={() => {
            setClicked2(true);
            setClicked(false);
            setClicked3(false);
            setClicked4(false);
          }}
        >
          About Us
        </li>
        <li
          className={`hover:text-[#000] hover:cursor-pointer ${
            clicked3 ? "active" : ""
          }`}
          onClick={() => {
            setClicked3(true);
            setClicked2(false);
            setClicked(false);
            setClicked4(false);
          }}
        >
          Services
        </li>
        <li
          className={`hover:text-[#000] hover:cursor-pointer ${
            clicked4 ? "active" : ""
          }`}
          onClick={() => {
            setClicked4(true);
            setClicked2(false);
            setClicked3(false);
            setClicked(false);
          }}
        >
          Project
        </li>
      </ul>
    </>
  );
};

export default Navbar;
