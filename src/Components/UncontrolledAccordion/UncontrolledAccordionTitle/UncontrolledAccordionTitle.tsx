import React from "react";

type AccordionTitlePropsType = {
  title: string
  activeCollapsed: () => void
}

function UncontrolledAccordionTitle(props: AccordionTitlePropsType) {
  console.log('UncontrolledAccordionTitle rendering');
  return (
    <h3 onClick={() => props.activeCollapsed()}>неконтр {props.title}</h3>
  )
}

export default UncontrolledAccordionTitle;