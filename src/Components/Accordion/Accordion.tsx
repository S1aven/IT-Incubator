import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
  title: string
  collapsed: boolean
  collapsedChange: (collapsed: boolean) => void
  items: {
    id: number
    title: string
  }[]
  onClick: (id: number) => void
}

function Accordion(props: AccordionPropsType) {
  console.log('UncontrolledAccordion rendering');

  return (
    <div>
      <AccordionTitle title={props.title} collapsedChange={props.collapsedChange}/>
      {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </div>
  )
}

export default Accordion;