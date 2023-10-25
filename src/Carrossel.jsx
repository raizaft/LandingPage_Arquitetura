import React, { useState } from "react";
import { Carousel } from "flowbite-react";

function Carrossel() {
  return (
    <Carousel className="h-[calc(100vh-60px)]">
      <img alt="..." src="img/casa01.png" />
      <img alt="..." src="img/casa02.png" />
      <img alt="..." src="img/casa03.png" />
    </Carousel>
  );
}

export default Carrossel;
