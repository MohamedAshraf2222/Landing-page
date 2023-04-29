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
import contactUs from "../assets/contactUs.png";

import Header from "../components/Header";
import EngineerCard from "../components/EngineerCard";
import { useRef } from "react";

const Landing = () => {
  const nameDiv = useRef();
  const nameInput = useRef();
  const nameP = useRef();
  const emailDiv = useRef();
  const emailInput = useRef();
  const emailP = useRef();
  const subjectDiv = useRef();
  const subjectInput = useRef();
  const subjectP = useRef();
  const messageDiv = useRef();
  const messageInput = useRef();
  const messageP = useRef();

  function handleFormInputFocus(e) {
    if (e.target.name === "name") {
      nameDiv.current.classList.add("border-form-input");
      nameDiv.current.classList.add("bg-white");
      nameInput.current.classList.add("bg-white");
      nameP.current.classList.remove("d-none");
    } else if (e.target.name === "email") {
      emailDiv.current.classList.add("border-form-input");
      emailDiv.current.classList.add("bg-white");
      emailInput.current.classList.add("bg-white");
      emailP.current.classList.remove("d-none");
    } else if (e.target.name === "subject") {
      subjectDiv.current.classList.add("border-form-input");
      subjectDiv.current.classList.add("bg-white");
      subjectInput.current.classList.add("bg-white");
      subjectP.current.classList.remove("d-none");
    } else if (e.target.name === "message") {
      messageDiv.current.classList.add("border-form-input");
      messageDiv.current.classList.add("bg-white");
      messageInput.current.classList.add("bg-white");
      messageP.current.classList.remove("d-none");
    }
  }
  function handleFormInputBlur(e) {
    if (e.target.name === "name") {
      nameDiv.current.classList.remove("border-form-input");
      nameDiv.current.classList.remove("bg-white");
      nameInput.current.classList.remove("bg-white");
      nameP.current.classList.add("d-none");
    } else if (e.target.name === "email") {
      emailDiv.current.classList.remove("border-form-input");
      emailDiv.current.classList.remove("bg-white");
      emailInput.current.classList.remove("bg-white");
      emailP.current.classList.add("d-none");
    } else if (e.target.name === "subject") {
      subjectDiv.current.classList.remove("border-form-input");
      subjectDiv.current.classList.remove("bg-white");
      subjectInput.current.classList.remove("bg-white");
      subjectP.current.classList.add("d-none");
    } else if (e.target.name === "message") {
      messageDiv.current.classList.remove("border-form-input");
      messageDiv.current.classList.remove("bg-white");
      messageInput.current.classList.remove("bg-white");
      messageP.current.classList.add("d-none");
    }
  }
  return (

    <>
      <div className="flex mt-4 ml-20 mr-12 justify-between items-center">
        <Navbar />

        <div className="absolute bg-[#c9e7ff] opacity-[0.4] -z-20 top-[90px] right-[32%] rounded-[5px] rounded-tl-[106.5px] h-28 w-32"></div>
      </div>
      <div className="flex mx-auto max-w-[90%] gap-5 mt-4 justify-between">
        <div className="flex-[0.80] ml-[30px] flex flex-col gap-8">
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
        <img
          className="max-w-[45%] max-h-[85vh] -z-10 top-[50px] right-[49px] rounded-[5px] rounded-bl-[40%]"
          src={HeroIMG}
          alt="hero"
        />
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
      <div className="mt-10 flex gap-5 justify-center mb-16">
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
      <div
        className={`flex flex-col justify-center items-center mx-auto bg-message h-[90vh]`}
      >
        <h3 className="text-[#FAFAFA] text-[32px] mt-7 mb-5">
          Message from CEO
        </h3>
        <div className="max-w-[72%] flex justify-start w-full">
          <svg
            className="self-start ml-"
            width="45"
            height="40"
            viewBox="0 0 91 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.7368 64H0L27.0464 0H45.3591L28.7368 64ZM74.3777 64H45.6409L72.6873 0H91L74.3777 64Z"
              fill="white"
            />
          </svg>
        </div>

        <p className="text-[#FAFAFA] text-[9px] leading-[18px] max-w-[60%]">
          Shewing met parties gravity husband sex pleased. On to no kind do next
          feel held walk. Last own loud and knew give gay four. Sentiments
          motionless or principles preference excellence am. Literature
          surrounded insensible at indulgence or to admiration remarkably.
          Matter future lovers desire marked boy use. Chamber reached do he
          nothing be.
        </p>
        <p className="text-[#FAFAFA] text-[9px] leading-[18px] max-w-[60%] mt-5">
          Do in laughter securing smallest sensible no mr hastened. As perhaps
          proceed in in brandon of limited unknown greatly. Distrusts fulfilled
          happiness unwilling as explained of difficult. No landlord of peculiar
          ladyship attended if contempt ecstatic. Loud wish made on is am as
          hard. Court so avoid in plate hence. Of received mr breeding concerns
          peculiar securing landlord. Spot to many it four bred soon well to. Or
          am promotion in no departure abilities. Whatever landlord yourself at
          by pleasure of children be.
        </p>
        <div className="max-w-[72%] flex justify-end w-full">
          <svg
            width="45"
            height="40"
            viewBox="0 0 91 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M62.2632 -2.51225e-06L91 0L63.9536 64L45.6409 64L62.2632 -2.51225e-06ZM16.6223 -6.50231e-06L45.3591 -3.99005e-06L18.3127 64L0 64L16.6223 -6.50231e-06Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <Header
        title="Contact Us"
        subTitle="Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
      />
      <div className="flex mt-8 max-w-[80%] mx-auto">
        <div className="flex-[1] ">
          <form action="" className="flex gap-5 flex-col">
            <div
              ref={nameDiv}
              className="relative py-1 px-2 rounded-[8px] bg-[#F9F9F9] border-none"
            >
              <p
                ref={nameP}
                className="absolute text-[10px] bg-white top-[-14px] text-[#6B6B6B] px-1 d-none"
              >
                name
              </p>
              <input
                ref={nameInput}
                className="text-[12px] border-none outline-none bg-[#F9F9F9] text-[#313131] w-full"
                onFocus={(e) => {
                  handleFormInputFocus(e);
                }}
                onBlur={(e) => {
                  handleFormInputBlur(e);
                }}
                type="text"
                placeholder="Name"
                name="name"
              />
            </div>
            <div
              ref={emailDiv}
              className="relative py-1 px-2 rounded-[8px] bg-[#F9F9F9] border-none"
            >
              <p
                ref={emailP}
                className="absolute text-[10px] bg-white top-[-14px] text-[#6B6B6B] px-1 d-none"
              >
                email
              </p>
              <input
                ref={emailInput}
                className="text-[12px] border-none outline-none bg-[#F9F9F9] text-[#313131] w-full"
                onFocus={(e) => {
                  handleFormInputFocus(e);
                }}
                onBlur={(e) => {
                  handleFormInputBlur(e);
                }}
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>
            <div
              ref={subjectDiv}
              className="relative py-1 px-2 rounded-[8px] bg-[#F9F9F9] border-none"
            >
              <p
                ref={subjectP}
                className="absolute text-[10px] bg-white top-[-14px] text-[#6B6B6B] px-1 d-none"
              >
                subject
              </p>
              <input
                ref={subjectInput}
                onFocus={(e) => {
                  handleFormInputFocus(e);
                }}
                onBlur={(e) => {
                  handleFormInputBlur(e);
                }}
                className="text-[12px] border-none outline-none bg-[#F9F9F9] text-[#313131] w-full"
                type="text"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div
              ref={messageDiv}
              className="relative py-1 px-2 rounded-[8px] bg-[#F9F9F9] border-none"
            >
              <p
                ref={messageP}
                className="absolute text-[10px] bg-white top-[-14px] text-[#6B6B6B] px-1 d-none"
              >
                message
              </p>
              <input
                ref={messageInput}
                onFocus={(e) => {
                  handleFormInputFocus(e);
                }}
                onBlur={(e) => {
                  handleFormInputBlur(e);
                }}
                className="text-[12px] border-none outline-none bg-[#F9F9F9] text-[#313131] w-full"
                type="text"
                placeholder="Message"
                name="message"
              />
            </div>
            <button className="relative btn-shadow mt-10 bg-[#18a7b9] rounded-[5px] rounded-tl-[40px] rounded-br-[40px] text-white text-[10px] pt-[5px] pb-[5px] pl-[40px] pr-[40px] cursor-pointer max-w-[60%]">
              Send&nbsp;Message
            </button>
          </form>
        </div>
        <div className="flex-[1.5]">
          <img className="w-[380px]" src={contactUs} alt="" />
        </div>
      </div>
      <Header
        title="Lattest Blogs"
        subTitle="Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
      />
      <div className="flex max-w-[80%] mx-auto gap-10 mt-12">
        <div className="flex-[1] blog-img1 h-[270px] w-full rounded-[10px] flex flex-col justify-end">
          <p className="text-white text-center text-[12px] font-bold">
            Unleash Your Creativity
          </p>
          <p className="text-white text-center text-[8px] mb-8">
            Nine for Mortal Men, doomed to die, One for
          </p>
        </div>
        <div className="flex-[1] blog-img2 h-[270px] w-full rounded-[10px] flex flex-col justify-end">
          <p className="text-white text-center text-[12px] font-bold">
            Unleash Your Creativity
          </p>
          <p className="text-white text-center text-[8px]">
            Nine for Mortal Men, doomed to die, One for
          </p>
          <button className="rounded-[5px] drop-shadow rounded-tl-[40px] rounded-br-[40px] text-[#ffffff] text-[10px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] cursor-pointer border border-solid border-[#ffffff] max-w-[50%] mx-auto mt-2 mb-8">
            Read more
          </button>
        </div>
      </div>
      <Header
        title="Subscribe to our
        Newsletter"
        subTitle="Age sold some full like rich new. Amounted repeated as believed in confined juvenile."
      />
      <button className="relative flex justify-center items-center gap-3 btn-shadow mt-10 bg-[#18a7b9] rounded-[5px] rounded-tl-[40px] rounded-br-[40px] text-white text-[8px] pt-[5px] pb-[5px] pl-[40px] pr-[40px] cursor-pointer max-w-[150px] mx-auto">
        SUBSCRIBE
        <svg
          width="8"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8953 3.72932C11.0349 3.61877 11.0349 3.38135 10.8953 3.27081L6.84048 0.0624358C6.7533 -0.00669007 6.63484 -0.0195235 6.53492 0.0294771C6.435 0.0784777 6.37186 0.179979 6.37186 0.291689L6.37186 2.91672L0.28963 2.91672C0.129754 2.91672 -1.33206e-07 3.04739 -1.40243e-07 3.20839L-1.65742e-07 3.79173C-1.7278e-07 3.95274 0.129754 4.0834 0.28963 4.0834L6.37186 4.0834L6.37186 6.70844C6.37186 6.82015 6.43529 6.92194 6.53492 6.97065C6.63455 7.01936 6.7533 7.00682 6.84048 6.93769L10.8953 3.72932Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="flex max-w-[85%] mx-auto gap-8 mt-16">
        <div className="flex flex-col flex-[1]">
          <div className="text-[12px] font-semibold leading-[19px] text-[#18a7b9] tracking-[-0.06em] mb-2">
            CONSTRUCTION
          </div>
          <p className="text-[#6B6B6B] text-[9px] leading-[16px]">
            You’ll find your next Home loan valu you prefer.
          </p>
          <div className="flex gap-1 mt-5">
            <svg
              className="cursor-pointer"
              width="16"
              height="16"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9118 0H3.55882C1.59613 0 0 1.59613 0 3.55882V24.9118C0 26.8745 1.59613 28.4706 3.55882 28.4706H24.9118C26.8745 28.4706 28.4706 26.8745 28.4706 24.9118V3.55882C28.4706 1.59613 26.8745 0 24.9118 0Z"
                fill="#18A7B9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 12.6154H15.6667V10.7692C15.6667 10.2597 16.0848 10.3077 16.6 10.3077H17.5333V8H15.6667C14.9241 8 14.2119 8.29176 13.6868 8.81109C13.1617 9.33042 12.8667 10.0348 12.8667 10.7692V12.6154H11V14.9231H12.8667V20H15.6667V14.9231H17.0667L18 12.6154Z"
                fill="white"
              />
            </svg>
            <svg
              className="cursor-pointer"
              width="16"
              height="16"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4688 24.5163C28.4688 25.5651 28.059 26.5709 27.3297 27.3124C26.6004 28.054 25.6113 28.4706 24.5799 28.4706H4.35764C3.32624 28.4706 2.33709 28.054 1.60778 27.3124C0.878471 26.5709 0.46875 25.5651 0.46875 24.5163V3.95425C0.46875 2.90552 0.878471 1.89974 1.60778 1.15817C2.33709 0.416607 3.32624 0 4.35764 0H24.5799C25.6113 0 26.6004 0.416607 27.3297 1.15817C28.059 1.89974 28.4688 2.90552 28.4688 3.95425V24.5163Z"
                fill="#18A7B9"
              />
              <path
                d="M19.8768 11.0042C19.4792 11.1894 18.9757 11.3633 18.5245 11.4211C18.9834 11.1349 19.7113 10.5391 19.8768 10C19.4481 10.2648 18.6728 10.5476 18.1671 10.6499C17.7632 10.1999 17.1871 10 16.5488 10C15.3228 10 14.4677 11.0918 14.4677 12.3684V13.3158C12.6647 13.3158 10.9067 11.8725 9.81271 10.4737C9.6149 10.8262 9.51105 11.2283 9.51206 11.6375C9.51206 12.4992 10.2653 13.3736 10.8616 13.7895C10.4979 13.7776 9.80911 13.4858 9.50935 13.3158V13.3428C9.50935 14.464 10.2581 15.2252 11.2727 15.4374C11.0875 15.4909 10.8616 15.6842 9.99256 15.6842C10.2747 16.6008 11.6933 17.0854 12.6647 17.1053C11.9047 17.7244 10.5497 18.0526 9.50935 18.0526C9.3295 18.0526 9.23214 18.0631 9.05859 18.0417C10.0403 18.6954 11.4115 19 12.6647 19C16.7472 19 18.9753 15.7231 18.9753 12.6668C18.9753 12.5664 18.9721 12.2301 18.9671 12.1316C19.4035 11.8085 19.5802 11.4703 19.8768 11.0042Z"
                fill="white"
              />
            </svg>
            <svg
              className="cursor-pointer"
              width="16"
              height="16"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6115 0H6.9216C3.39231 0 0.53125 2.86106 0.53125 6.39035V22.0802C0.53125 25.6095 3.39231 28.4706 6.9216 28.4706H22.6115C26.1408 28.4706 29.0018 25.6095 29.0018 22.0802V6.39035C29.0018 2.86106 26.1408 0 22.6115 0Z"
                fill="#18A7B9"
              />
              <path
                d="M11.4415 12.3151H9.1634V18.9866H11.4415V12.3151Z"
                fill="white"
              />
              <path
                d="M11.0585 9.20164C10.8414 9.07017 10.5862 9 10.3252 9C10.1511 9 9.97864 9.03124 9.81784 9.09194C9.65703 9.15264 9.51103 9.24159 9.38824 9.35367C9.26544 9.46576 9.16827 9.59878 9.10232 9.74507C9.03637 9.89136 9.00293 10.048 9.00393 10.2061C9.00543 10.443 9.0842 10.6742 9.23029 10.8705C9.37639 11.0668 9.58327 11.2194 9.82484 11.3091C10.0664 11.3988 10.3318 11.4216 10.5876 11.3745C10.8434 11.3275 11.0782 11.2127 11.2622 11.0448C11.4462 10.8768 11.5713 10.6631 11.6217 10.4306C11.6721 10.1982 11.6455 9.95744 11.5452 9.73872C11.445 9.51999 11.2756 9.3331 11.0585 9.20164Z"
                fill="white"
              />
              <path
                d="M15.0983 12.3147H12.9038L12.8962 19H15.1743V15.6987C15.1743 14.8303 15.3565 13.9895 16.5412 13.9895C17.7258 13.9895 17.7258 14.9888 17.7258 15.7607V18.9862H20.0039V15.3265C20.0039 13.5277 19.5407 12.1493 17.2626 12.1493C16.8284 12.1339 16.3977 12.2258 16.0165 12.4151C15.6354 12.6045 15.318 12.8842 15.0983 13.2245V12.3147Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col flex-[1]">
          <p className="text-[#313131] text-[9px] font-bold leading-[16px] mb-3">
            Resources
          </p>
          <p className="text-[#6B6B6B] text-[8px] leading-[16px]">Our Agents</p>
          <p className="text-[#6B6B6B] text-[8px] leading-[16px]">
            Member Stories
          </p>
          <p className="text-[#6B6B6B] text-[8px] leading-[16px]">Video</p>
          <p className="text-[#6B6B6B] text-[8px] leading-[16px]">Free trial</p>
        </div>
        <div className="flex flex-col flex-[1]">
          <p className="text-[#313131] text-[9px] font-bold leading-[16px] mb-3">
            Company
          </p>
          <p className="text-[#6B6B6B] text-[8px] leading-[16px]">
            Patnerships
          </p>
          <p className="text-[#6B6B6B] text-[8px] leading-[16px]">
            Terms of use
          </p>
          <p className="text-[#6B6B6B] text-[8px] leading-[16px]">Privacy</p>
          <p className="text-[#6B6B6B] text-[8px] leading-[16px]">Sitemap</p>
        </div>
        <div className="flex flex-col flex-[1]">
          <p className="text-[#313131] text-[9px] font-bold leading-[16px] mb-3">
            Get in touch
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your mail"
              className="text-[#6B6B6B] text-[8px] leading-[16px] border-none max-w-[80px] pl-1 py-[1px] outline-none"
            />
            <button>
              <svg
                width="11"
                height="11"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 14.75C6.20979 14.75 4.4929 14.0388 3.22703 12.773C1.96116 11.5071 1.25 9.79021 1.25 8C1.25 6.20979 1.96116 4.4929 3.22703 3.22703C4.4929 1.96116 6.20979 1.25 8 1.25C9.79021 1.25 11.5071 1.96116 12.773 3.22703C14.0388 4.4929 14.75 6.20979 14.75 8C14.75 9.79021 14.0388 11.5071 12.773 12.773C11.5071 14.0388 9.79021 14.75 8 14.75ZM8 16C5.87827 16 3.84344 15.1571 2.34314 13.6569C0.842854 12.1566 -5.33069e-07 10.1217 -4.21327e-07 8C-3.09584e-07 5.87827 0.842854 3.84344 2.34315 2.34315C3.84344 0.842854 5.87827 -3.67211e-07 8 -2.90235e-07C10.1217 -2.1326e-07 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM7.47 5.53L9.19 7.25L4 7.25L4 8.75L9.19 8.75L7.47 10.47L8.53 11.53L11.53 8.53C11.6705 8.38937 11.7493 8.19875 11.7493 8C11.7493 7.80125 11.6705 7.61063 11.53 7.47L8.53 4.47L7.47 5.53Z"
                  fill="#18A7B9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <p className="text-[#6B6B6B] text-[6px] leading-[16px] mt-16 mb-4 text-center">
        Copyright construction.com, All rights reserved.
      </p>
    </>
  );
};

export default Landing;
