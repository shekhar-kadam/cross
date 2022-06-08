import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  let mockData = [
    {
      key: "1",
      title: "Home",
      link: "/",
      activeClass: "active",
    },
    {
      key: "2",
      title: "Add Contact",
      link: "/addContact",
      activeClass: "active",
    },
  ];
  return (
    <div
      className="top-0 flex flex-row w-full border-2 border-gray"
      style={{ boxShadow: "0px 3px 6px #00000029" }}
    >
      <div className="relative top-0 right-0 flex justify-around float-right h-20 md:w-100 md:ml-6 lg:ml-32">
        {mockData.map((elem) => (
          <div key={elem.key}>
            <p className="md:text-sm lg:text-sm xl:text-lg mt-4 text-[#29458c] cursor-pointer font-[Saira]">
              <NavLink activeClassName={elem.activeClass} to={elem.link}>
                {elem.title}
              </NavLink>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
