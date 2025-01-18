import React, { useEffect } from "react";
import "./Static/style/global.css";
import Header from "./Layouts/Header";
import Body from "./Layouts/Body";

export default function App() {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  return (
    <div className="py-[34px] px-[50px] md:px-[100px] bg-light-yellow-p">
      <Header isMobile={isMobile} />
      <Body />
    </div>
  );
}
