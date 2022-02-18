import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
  title: string
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
  console.log('UncontrolledAccordion rendering');

  return (
    <div>
      <AccordionTitle title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  )
  //
  // if (props.collapsed) {
  //   return (
  //     <div>
  //       <UncontrolledAccordionTitle title={props.title}/>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <UncontrolledAccordionTitle title={props.title}/>
  //       <UncontrolledAccordionBody/>
  //     </div>
  //   )
  // }
}

export default Accordion;