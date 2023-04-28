import React from "react";

const Header = ({ title, subTitle }) => {
  return (
    <>
      <div className="flex mt-16 gap-3 flex-col text-center max-w-[40%] mx-auto">
        <p className="font-[600] text-[26px] text-[#313131] leading-[120%] tracking-[-0.04em]">
          {title}
        </p>
        <p className="text-[#6B6B6B] text-[10px] leading-[16px]">{subTitle}</p>
      </div>
    </>
  );
};

export default Header;
