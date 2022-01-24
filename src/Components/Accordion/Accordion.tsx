import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
  title: string
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering');
  if (props.collapsed) {
    return (
      <div>
        <AccordionTitle title={props.title}/>
      </div>
    )
  } else {
    return (
      <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
      </div>
    )
  }
}

export default Accordion;