import React from "react";
import img from "../assets/ujjwal.jpg";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <main className="flex flex-col gap-4 md:flex-row py-12 items-center container mx-4 md:m-auto">
      {/* <div className="flex-1 flex flex-col">
        <div className="flex-1 py-10 mx-auto">
          <div className="flex items-center my-4 ">
            <div className="text-5xl font-bold mr-8">Hi! i Am</div>
            <div className="text-3xl bg-blue-500 text-white font-bold rounded-full p-4">
              Fontend Developer
            </div>
          </div>

          <div className="text-5xl font-bold mb-8">Ujjwal Kandel</div>
          <p className="mb-8">
            Creating websites and web applications.{" "}
            <span className="font-bold">5 years</span> as a programmer
          </p>

          <div className="flex items-center mb-8">
            <button className="bg-orange-600 text-white py-2 px-4 mr-4">
              Hire Me
            </button>
            <a href="#" className="font-bold">
              Projects
            </a>
          </div>

          <div className="mb-8">
            <div className="font-bold text-3xl mb-3">+84</div>
            <div className="font-bold">
              Clients on work <br></br> worldwide
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <div className="font-bold text-3xl mb-3">572</div>
              <div className="font-bold">Project Done</div>
            </div>

            <div>
              <div className="font-bold text-3xl mb-3">Contact</div>
              <div className="font-bold">ujjwalkandel1@gmail.com</div>
            </div>
          </div>
        </div>
      </div> */}

      <div className=" max-w-3xl my-4">
        <h1 className="text-5xl font-bold">
          Hi! i Am <br />
          Ujjwal Kandel
          <span className=" text-blue-500/90"> Front-End Developer</span>
        </h1>
        <p className="my-4">
          Creating websites and web applications.{" "}
          <span className="font-bold text-blue-500/90">5 years</span> as a
          programmer
        </p>

        <div className="flex items-center flex-row gap-4">
          <button className="bg-orange-600  rounded-full text-white py-2 px-4">
            Hire Me
          </button>
          <Link href="#" className="font-bold">
            Projects
          </Link>
        </div>
      </div>

      <img className="w-48 md:w-80 " src={img} alt="thumbnail" />
    </main>
  );git
}
