/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from "react";
import NavList from "./NavList";
import BurgerIcon from "./BurgerIcon";

const Burger = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!burgerOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setBurgerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [burgerOpen]);

  return (
    <div ref={navRef}>
      <BurgerIcon
        open={burgerOpen}
        toggleMenu={() => setBurgerOpen(!burgerOpen)}
      />
      <NavList open={burgerOpen} closeMenu={() => setBurgerOpen(false)} />
    </div>
  );
};

export default Burger;
