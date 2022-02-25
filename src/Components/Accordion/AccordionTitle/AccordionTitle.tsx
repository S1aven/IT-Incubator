import React from "react";

type AccordionTitlePropsType = {
  title: string
  collapsedChange: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('UncontrolledAccordionTitle rendering');
  return (
    <h3 onClick={() => {props.collapsedChange(true)}}>{props.title}</h3>
  )
}

export default AccordionTitle;