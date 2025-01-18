import React from "react";
import CoolButton from "../Components/CoolButton";

export default function Body() {
  const [showedWork, setShowedWork] = React.useState(2);
  const [works, setWorks] = React.useState([
    {
      date: "May 11, 2024",
      title: "Bitcode Maker",
      description:
        "The BitcodeMaker is a project focused on creating a tool for generating and working with bitcode, which can be used for various low-level programming tasks or encoding purposes. The tool aims to facilitate the process of converting data into its bitwise representation, providing efficient encoding and manipulation functionalities.",
      github: "https://github.com/slached/BitcodeMaker",
    },
    {
      date: "May 27, 2024",
      title: "E-Commerce",
      description:
        "The E-Commerce project is a full-stack e-commerce application designed to demonstrate a complete system for managing an online store. It integrates both frontend and backend technologies to provide a cohesive experience for users.",
      github: "https://github.com/slached/E-Commerce",
    },
    {
      date: "Oct 13, 2024",
      title: "Film-Streaming-MS",
      description:
        " Film-Streaming-MS is a microservice-based backend for a movie streaming platform. It is designed to handle movie management, user watch history, and other services required for a streaming application. The project is builtusing Node.js with an emphasis on scalability and efficiency.",
      github: "https://github.com/slached/Film-Streaming-MS",
    },
    {
      date: "Oct 29, 2023",
      title: "StackOverflow Clone",
      description:
        " The StackOverflow project is likely designed as a project or toolset inspired by the popular developer Q&A platform, Stack Overflow. Its purpose could range from a simplified clone or practice project mimicking the core functionalities of Stack Overflow to an exploration of question-and-answer systems for learning and collaboration.",
      github: "https://github.com/slached/StackOverflow",
    },
    {
      date: "Nov 29, 2024",
      title: "BookStore API",
      description:
        "The BookStore API is a RESTful API designed for managing books in a bookstore application. It provides endpoints for adding, removing, updating, and fetching book data, allowing users to perform CRUD operations with ease. This project demonstrates the use of modern web development practices and technologies for building a scalable and maintainable API.",
      github: "https://github.com/slached/BookStore-API",
    },
    {
      date: "Mar 12, 2023",
      title: "Todo App",
      description:
        "The TodoApp project designed to demonstrate the core functionality of a to-do list application. It serves as a practical example of how to manage tasks with features like adding, editing, deleting, and marking tasks as complete. This project can also highlight your skills in frontend, backend, or full-stack development, depending on its implementation.",
      github: "https://github.com/slached/TodoApp",
    },
  ]);


  return (
    <div className="flex justify-center">
      <div className="flex flex-col  text-dark-blue-p max-w-[1200px] grow">
        {/* <!-- Upper Definition --> */}
        <div className="mb-[200px] flex justify-between items-center md:mb-[270px]">
          <div className="flex flex-col">
            <p className="text-[18px] font-medium md:text-[28px] md:mb-[11px]">Hello, I'm Ömer,</p>
            <h1 className="text-[60px] font-extrabold md:text-[100px] md:max-w-[230px] md:leading-[116px]">Computer Engineer</h1>
            <p className="text-[18px] font-medium md:text-[28px] mt-[10px] md:mt-[20px] mb-[37px]">based in Türkiye.</p>
            <CoolButton text="Resume" />
          </div>
        </div>
        {/* <!-- About Definition --> */}
        <div id="about-section" className="flex flex-col mb-[180px]">
          <h1 className="text-[50px] font-extrabold md:text-[100px] text-very-light-yellow-p mb-[32px]">about.</h1>
          <p className="text-[18px] md:text-[24px] md:leading-[44px] md:max-w-[900px] mb-[140px]">
            My interest and curiosity in technology have always driven me to follow the latest developments and conduct in-depth
            research. The primary motivation behind pursuing a degree in computer engineering was this passion. I believe I have a
            quick grasp of new technologies and the ability to learn them rapidly. I thoroughly enjoy combining theoretical
            knowledge with practical experience to continuously improve myself. Developing software and solving problems offer
            both challenges and immense satisfaction for me. The opportunity to deepen my knowledge and skills in these processes
            keeps me motivated every day.
          </p>
          <ul className="md:ms-[256px] list-disc flex flex-col gap-[80px]">
            <li>
              <h3 className="font-semibold text-[24px] mb-[10px]">2015-2019</h3>
              <p>
                High School, Maçka Vocational and Technical High School (Yıldız Teknik Üniversitesi Maçka Mesleki ve Teknik
                Anadolu Lisesi)
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-[24px] mb-[10px]">2021-2024</h3>
              <p>
                Bachelor's Degree, Inonu University <strong>Computer Engineering.</strong>
              </p>
            </li>
          </ul>
        </div>
        {/* <!-- Work Definition --> */}
        <div id="work-section" className="flex flex-col  mb-[125px]">
          <h1 className="font-extrabold text-[50px] md:text-[100px] text-very-light-yellow-p mb-[32px]">work.</h1>
          <p className="text-[18px] md:text-[24px] md:leading-[44px] md:max-w-[900px] mb-[124px]">
            During my academic journey, I had the opportunity to complete my mandatory long-term internship at Virgosol, a leading
            IT company. You can click the button above to download my CV and easily explore the details of my contributions there.
            Additionally, below, I’ve highlighted a few of my open-source projects available on my GitHub, showcasing my work and
            passion for software development.
          </p>
          {/* <!-- Work Cards --> */}
          <div className="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-x-[144px] gap-y-[50px]">
            {works.map((work, index) => {
              if (index + 1 <= showedWork) {
                return (
                  <div className="max-w-[400px]">
                    <h3 className="italic text-[15px] mt-[20px] mb-[10px]">{work.date}</h3>
                    <h2 className="font-semibold text-[24px]">{work.title}</h2>
                    <p className="text-[18px] mt-[10px]">{work.description}</p>
                    <a target="_blank" href={work.github} className="text-[18px] mt-[10px] font-bold text-dark-brown-p">
                      github link.
                    </a>
                  </div>
                );
              }
            })}
          </div>
          {/* <!-- Show More/Less Button --> */}
          <div className="mt-[40px] select-none">
            {showedWork < works.length ? (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setShowedWork(showedWork + 2);
                }}
              >
                Show more...
              </div>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setShowedWork((prevState) => (prevState > 0 ? 2 : 0));
                }}
              >
                Show less
              </div>
            )}
          </div>
        </div>
        {/* <!-- Contact Section --> */}
        <div className="flex flex-col mb-[90px]">
          <h1 className="font-extrabold text-[50px] md:text-[100px]  text-very-light-yellow-p mb-[49px]">contact.</h1>
          <div className="md:flex md:gap-x-[50px] ">
            <img
              className="w-[400px] h-[314px]"
              alt="contact_i"
              // @ts-ignore
              src={require("../Static/images/others/contact.png")}
            />
            <div className="flex flex-col">
              <p className="text-[12px] lg:text-[24px] lg:leading-[44px] mb-[21px] mt-[20px] md:mt-0">
                Let's Connect! Feel free to reach out to me for collaboration, inquiries, or just to say hello. Whether you're
                interested in discussing a project, seeking assistance, or sharing ideas, I'm always open to meaningful
                conversations.
              </p>
              <div className="text-[12px] lg:text-[15px]">
                <p>📩 Email: omerbsahin@gmail.com</p>
                <p>
                  💼 LinkedIn:{" "}
                  <a href="https://www.linkedin.com/in/%C3%B6mer-bircan-%C5%9Fahin-2a0896240/">
                    https://www.linkedin.com/in/%C3%B6mer-bircan-%C5%9Fahin-2a0896240/
                  </a>
                </p>
                <p>
                  🌐 GitHub: <a href="https://github.com/slached">https://github.com/slached</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
