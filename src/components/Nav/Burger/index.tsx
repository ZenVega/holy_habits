/** @jsxImportSource @emotion/react */
import { useState } from "react";
import NavList from "./NavList";
import BurgerIcon from "./BurgerIcon";

const Burger = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <div>
      <BurgerIcon
        open={burgerOpen}
        toggleMenu={() => setBurgerOpen(!burgerOpen)}
      />
      <NavList open={burgerOpen} closeMenu={() => setBurgerOpen(false)} />
    </div>
  );
};

export default Burger;
