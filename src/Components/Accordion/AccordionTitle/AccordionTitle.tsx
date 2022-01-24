import React from "react";

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendering');
  return (
    <h3>{props.title}</h3>
  )
}

export default AccordionTitle;