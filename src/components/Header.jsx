import React from "react";

const Header = ({ title, subTitle }) => {
  return (
    <>
      <div className="flex mb-[80px] mt-[140px] gap-3 flex-col text-center max-w-[40%] mx-auto">
        <p className="font-[600] text-[54px] text-[#313131] leading-[56px]">
          {title}
        </p>
        <p className="text-[#6B6B6B] text-[20px] leading-[28px]">{subTitle}</p>
      </div>
    </>
  );
};

export default Header;
