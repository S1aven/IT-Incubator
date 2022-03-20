import React from "react";

type AccordionBodyPropsType = {
  items: {
    id: any
    title: string
  }[]
  onClick: (id: number) => void
}

function AccordionBody(props: AccordionBodyPropsType) {

  return (
      <ul>
        {props.items.map(i => <li onClick={() => {props.onClick(i.id)}} key={i.id}>{i.title}</li>)}
      </ul>
  )
}

export default AccordionBody;