import React from "react";

type AccordionTitlePropsType = {
  title: string
  collapsedChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendering');
  return (
    <h3 onClick={() => {props.collapsedChange()}}>{props.title}</h3>
  )
}

export default AccordionTitle;