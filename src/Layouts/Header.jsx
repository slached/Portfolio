/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { LinkedInIcon, GithubIcon } from "../Static/images/logos";

export default function Header(props) {
  return (
    <div className="flex justify-center ">
      <div className="flex select-none justify-between items-center text-dark-blue-p mb-[121px] max-w-[1200px] grow">
        <a className="text-[10px] font-semibold md:text-[24px] cursor-pointer" onClick={() => window.location.reload()}>
          Ömer Bircan Şahin
        </a>
        <div className="flex text-[10px] mx-[5px] gap-2 md:gap-[61px] md:text-[18px]">
          <div className="cursor-pointer" onClick={() => window.location.reload()}>
            Home
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              // @ts-ignore
              document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              // @ts-ignore
              document.getElementById("work-section").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Work
          </div>
        </div>
        <div className="flex md:gap-[29px] gap-2">
          <a target="_blank" href="https://www.linkedin.com/in/%C3%B6mer-bircan-%C5%9Fahin-2a0896240/">
            <LinkedInIcon size={props.isMobile ? "10px" : "20px"} />
          </a>
          <a target="_blank" href="https://www.github.com/slached">
            <GithubIcon size={props.isMobile ? "10px" : "20px"} />
          </a>
        </div>
      </div>
    </div>
  );
}
