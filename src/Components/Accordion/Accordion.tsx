import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
  title: string
  collapsed: boolean
  collapsedChange: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
  console.log('UncontrolledAccordion rendering');

  return (
    <div>
      <AccordionTitle title={props.title} collapsedChange={props.collapsedChange}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  )
}

export default Accordion;