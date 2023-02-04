import React from "react";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineCustomerService,
} from "react-icons/ai";
import { HiTag } from "react-icons/hi";
function Navbar() {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>{" "}
      <a href="#about">{/* <FcAbout /> */}</a>{" "}
      <a href="#book">
        <HiTag />
      </a>{" "}
      <a href="#services">
        <AiOutlineCustomerService />
      </a>{" "}
      <a href="#contact">
        <AiOutlineContacts />
      </a>
    </nav>
  );
}

export default Navbar;
