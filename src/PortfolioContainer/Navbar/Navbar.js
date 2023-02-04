import React, { useState } from "react";

import "./Navbar.css";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineCustomerService,
} from "react-icons/ai";
import { HiTag } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";

function Navbar() {
  const [active, setActive] = useState("#home");
  return (
    <nav>
      <a href="#home" className={active === "#home" ? "active" : ""}>
        <AiOutlineHome />
      </a>{" "}
      <a href="#about" onClick={()=>setActive("#about")}  className={active === "#about" ? "active" : ""}>{ <FcAbout /> }</a>{" "}
      <a href="#book" onClick={()=>setActive("#book")}  className={active === "#book" ? "active" : ""}>
        <HiTag />
      </a>{" "}
      <a href="#skills" onClick={()=>setActive("#skills")}  className={active === "#skills" ? "active" : ""}>
        <AiOutlineCustomerService />
      </a>{" "}
      <a href="#contact" onClick={()=>setActive("#contact")}  className={active === "#contact" ? "active" : ""}>
        <AiOutlineContacts />
      </a>
    </nav>
  );
}

export default Navbar;
