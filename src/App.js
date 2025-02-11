import React, { useEffect } from "react";
import "./Static/style/global.css";
import Header from "./Layouts/Header";
import Body from "./Layouts/Body";

export default function App() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setIsMobile(window.innerWidth < 768);
    });

    window.addEventListener("scroll", (event) => {
      setScrollY(window.scrollY);
    });
  }, []);

  return (
    <div className="py-[34px] px-[50px] md:px-[100px] bg-light-yellow-p">
      <div className={scrollY > 200 ? "sticky top-1 w-full z-50 bg-light-yellow-p mb-[70px] p-[8px] border border-dark-brown-p rounded-md" : "mb-[70px]"}>
        <Header isMobile={isMobile} />
      </div>
      <Body />
    </div>
  );
}
