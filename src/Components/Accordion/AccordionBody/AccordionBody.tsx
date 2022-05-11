import React, {useCallback, useMemo} from "react";

type AccordionBodyPropsType = {
  AccordionItems: {
    id: any
    title: string
  }[]
  onClick: (id: number) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  console.log('AccordionBody rendering')

  let accordionBody = useMemo(() => {
    return  props.AccordionItems.map(i => <li onClick={() => {props.onClick(i.id)}} key={i.id}>{i.title}</li>)
  }, [props.AccordionItems])

  return (
      <ul>
        {accordionBody}
      </ul>
  )
}

export default AccordionBody;