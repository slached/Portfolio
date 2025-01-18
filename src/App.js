import React from "react";
import "./Static/style/global.css";
import Header from "./Layouts/Header";
import Body from "./Layouts/Body";

export default function App() {
  return (
    <div className="py-[34px] px-[50px] md:px-[100px] bg-light-yellow-p">
      <Header />
      <Body />
    </div>
  );
}
