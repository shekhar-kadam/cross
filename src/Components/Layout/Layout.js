import React from "react";
import NavBar from "../Navbar/index";

function Layout(props) {
  const { children } = props;
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
