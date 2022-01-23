import React from "react";

function AccordionTitle(props:any) {
  console.log('AccordionTitle rendering');
  return (
    <h3>{props.title}</h3>
  )
}

export default AccordionTitle;