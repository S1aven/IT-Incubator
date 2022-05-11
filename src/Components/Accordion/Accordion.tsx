import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
  title: string
  collapsed: boolean
  collapsedChange: () => void
  AccordionItems: {
    id: number
    title: string
  }[]
  onClick: (id: number) => void
}

const AccordionTitleMemo = React.memo(AccordionTitle)
const AccordionBodyMemo = React.memo(AccordionBody)

function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering');

  return (
    <div>
      <AccordionTitleMemo title={props.title} collapsedChange={props.collapsedChange}/>
      {props.collapsed && <AccordionBodyMemo onClick={props.onClick} AccordionItems={props.AccordionItems}/>}
    </div>
  )
}

export default Accordion;