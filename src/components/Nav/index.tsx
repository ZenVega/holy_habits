"use client";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import NavBar from "./NavBar";
import Burger from "./Burger";

const Nav = () => {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return <NavBar />;
  }
  return <Burger />;
};
export default Nav;
