import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

function Accordion() {
  console.log('Accordion rendering');
  return (
    <div>
      <AccordionTitle />
      <AccordionBody />
    </div>
  )
}

export default Accordion;