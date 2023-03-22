import React, { useState } from "react";
/* import styled from "styled-components"; */
import LeftNav from "./LeftNav";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div>
        <div />
        <div />
        <div />
      </div>
      <LeftNav open={open} />
    </React.Fragment>
  );
};

export default BurgerMenu;
