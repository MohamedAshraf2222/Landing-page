import React from "react";
import Navbar from "../components/Navbar";
import HeroIMG from "../assets/hero.png";
import VectorIMG from "../assets/Vector1.svg";
import Logo1 from "../assets/chase.svg";
import Logo2 from "../assets/asana.svg";
import Logo3 from "../assets/buzzfeed.svg";
import Logo4 from "../assets/toggl.svg";
import Logo5 from "../assets/walmart.svg";
import content from "../assets/content.svg";
import Rectangle1 from "../assets/Rectangle1.svg";
import Rectangle2 from "../assets/Rectangle2.svg";
import Rectangle3 from "../assets/Rectangle3.svg";
import Engineer1 from "../assets/Engineer1.png";
import Engineer2 from "../assets/Engineer2.png";
import Engineer3 from "../assets/Engineer3.png";
import messageBg from "../assets/messageBg.png";

import Header from "../components/Header";
import EngineerCard from "../components/EngineerCard";

const Landing = () => {
  return (
    <>
      <div className="flex mt-12 ml-20 mr-12 justify-between items-center">
        <Navbar />
        <img
          className="h-[80vh] absolute -z-10 top-[50px] right-[49px] rounded-[5px] rounded-bl-[40%]"
          src={HeroIMG}
          alt="hero"
        />
        <div className="absolute bg-[#c9e7ff] opacity-[0.4] -z-20 top-[90px] right-[40%] rounded-[5px] rounded-tl-[106.5px] h-28 w-32"></div>
      </div>
      <div className="flex ml-[84px] mt-12">
        <div className="flex-[0.45] flex flex-col gap-8">
          <h1 className="font-[700] text-[38px] text-[#313131] leading-[120%] tracking-[-0.04em]">
            <span className="font-[700] text-[#18A7B9]"> Masters</span> of
            Consistency and{" "}
            <span className="font-[700] text-[#18A7B9]">Quality</span>.
          </h1>
          <p className="text-[#6B6B6B] text-[10px] leading-[16px] ">
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </p>
          <div className="flex gap-5">
            <button className="relative btn-shadow bg-[#18a7b9] rounded-[5px] rounded-tl-[40px] rounded-br-[40px] text-white text-[12px] pt-[5px] pb-[5px] pl-[40px] pr-[40px] cursor-pointer">
              Explore
            </button>
            <button className="rounded-[5px] drop-shadow rounded-tl-[40px] rounded-br-[40px] text-[#18A7B9] text-[12px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] cursor-pointer border border-solid border-[#18A7B9]">
              Contact Us
            </button>
            <img
              className="absolute w-[400px] -z-10 left-0"
              src={VectorIMG}
              alt=""
            />
          </div>
          <div className="flex justify-around">
            <div className="flex-col justify-center relative">
              <div className="absolute w-5 h-3 bg-[#FE8432] -z-10 rounded-circle rotate-[-50deg] top-[-4px] left-[-5px]"></div>
              <p className="text-[#313131] font-semibold text-[18px] leading-[20px]">
                25,356
              </p>
              <p className="text-[#6B6B6B] text-[10px] leading-[16px]">
                Projects Done
              </p>
            </div>
            <div className="flex-col justify-center relative">
              <div className="absolute w-5 h-3 bg-[#18A7B9] -z-10 rounded-circle rotate-[-50deg] top-[-4px] left-[-5px]"></div>
              <p className="text-[#313131] font-semibold text-[18px] leading-[20px]">
                15,200
              </p>
              <p className="text-[#6B6B6B] text-[10px] leading-[16px]">
                Buildings Done
              </p>
            </div>
            <div className="flex-col justify-center relative">
              <div className="absolute w-5 h-3 bg-[#42B918] -z-10 rounded-circle rotate-[-50deg] top-[-4px] left-[-5px]"></div>
              <p className="text-[#313131] font-semibold text-[18px] leading-[20px]">
                350+
              </p>
              <p className="text-[#6B6B6B] text-[10px] leading-[16px]">
                Total Employees
              </p>
            </div>
          </div>
        </div>
        {/* <img className="flex-1" src={HeroIMG} alt="Hero" /> */}
      </div>
      <div className="flex justify-between items-center w-[80%] mx-auto mt-[100px]">
        <img className="h-[24px] w-[70px]" src={Logo1} alt="logo" />
        <img className="h-[24px] w-[70px]" src={Logo2} alt="logo" />
        <img className="h-[24px] w-[75px]" src={Logo3} alt="logo" />
        <img className="h-[24px] w-[50px]" src={Logo4} alt="logo" />
        <img className="h-[24px] w-[75px]" src={Logo5} alt="logo" />
      </div>
      <div className="flex gap-20 justify-center items-center w-[80%] mx-auto mt-[5rem] mb-[3rem]">
        <div className="flex flex-col flex-[1] gap-3">
          <p className="text-[#6B6B6B] text-[10px] leading-[16px] ">
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </p>
          <button className="relative btn-shadow bg-[#18a7b9] rounded-[5px] rounded-tl-[40px] rounded-br-[40px] text-white text-[12px] pt-[5px] pb-[5px] pl-[40px] pr-[40px] cursor-pointer max-w-[50%]">
            Explore
          </button>
        </div>
        <p className="font-[600] text-[26px] text-[#313131] leading-[120%] tracking-[-0.04em] flex-[1]">
          Why Choose us for best construction experience
        </p>
      </div>
      <div className="flex justify-center items-center w-[80%] mx-auto">
        <div className="flex-[1]">
          <img className="w-[280px]" src={content} alt="contentImg" />
        </div>
        <div className="flex flex-[1] flex-col justify-around gap-16">
          <div className="flex justify-center relative gap-6">
            <div>
              <img className="w-[91px]" src={Rectangle1} alt="" />
            </div>
            <p className="absolute top-[-10px] left-[18px] text-[#313131] font-semibold text-[36px] leading-[20px]">
              01
            </p>
            <p className="text-[#6B6B6B] text-[10px] leading-[16px]">
              And residence for met the estimable disposing. Mean if he they
              been no hold mr. Is at much do made took held help.
            </p>
          </div>
          <div className="flex justify-center relative gap-6">
            <div>
              <img src={Rectangle2} alt="" />
            </div>
            <p className="absolute top-[-10px] left-[18px] text-[#313131] font-semibold text-[36px] leading-[20px]">
              02
            </p>
            <p className="text-[#6B6B6B] text-[10px] leading-[16px]">
              Up maids me an ample stood given. Certainty say suffering his him
              collected intention promotion.
            </p>
          </div>
          <div className="flex justify-center relative gap-6">
            <div>
              <img src={Rectangle3} alt="" />
            </div>
            <p className="absolute top-[-10px] left-[18px] text-[#313131] font-semibold text-[36px] leading-[20px]">
              03
            </p>
            <p className="text-[#6B6B6B] text-[10px] leading-[16px]">
              Good draw knew bred ham busy his hour. Ask agreed answer rather
              joy nature admire wisdom.
            </p>
          </div>
        </div>
      </div>
      <Header
        title="Our Best Engineers"
        subTitle="Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
      />
      <div className="mt-10 flex gap-5 justify-center">
        <EngineerCard
          name="Chris Evans"
          email="ChrisEvans@const.com"
          img={Engineer1}
        />
        <EngineerCard
          name="Alison Kiara"
          email="alisonkiara@const.com"
          img={Engineer2}
        />
        <EngineerCard
          name="Adam Gates"
          email="adamgates@const.com"
          img={Engineer3}
        />
      </div>
      <div className={``}>
        <h3>Message from CEO</h3>
        <p>
          Shewing met parties gravity husband sex pleased. On to no kind do next
          feel held walk. Last own loud and knew give gay four. Sentiments
          motionless or principles preference excellence am. Literature
          surrounded insensible at indulgence or to admiration remarkably.
          Matter future lovers desire marked boy use. Chamber reached do he
          nothing be.
        </p>
        <p>
          Do in laughter securing smallest sensible no mr hastened. As perhaps
          proceed in in brandon of limited unknown greatly. Distrusts fulfilled
          happiness unwilling as explained of difficult. No landlord of peculiar
          ladyship attended if contempt ecstatic. Loud wish made on is am as
          hard. Court so avoid in plate hence. Of received mr breeding concerns
          peculiar securing landlord. Spot to many it four bred soon well to. Or
          am promotion in no departure abilities. Whatever landlord yourself at
          by pleasure of children be.
        </p>
      </div>
    </>
  );
};

export default Landing;
