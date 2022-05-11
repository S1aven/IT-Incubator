import React, {useReducer, useState} from "react";
import UncontrolledAccordionTitle from "./UncontrolledAccordionTitle/UncontrolledAccordionTitle";
import UncontrolledAccordionBody from "./UncontrolledAccordionBody/UncontrolledAccordionBody";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
  title: string
}

const UncontrolledAccordionTitleMemo = React.memo(UncontrolledAccordionTitle)
const UncontrolledAccordionBodyMemo = React.memo(UncontrolledAccordionBody)

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log('UncontrolledAccordion rendering');

  // const [collapsed, setCollapsed] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, {collapsed: false})

  const activeCollapsed = () => {
    dispatch({type: TOGGLE_COLLAPSED})
    // setCollapsed(!collapsed)
  }

  return (
    <div>
      <UncontrolledAccordionTitleMemo activeCollapsed={activeCollapsed} title={props.title}/>
      {!state.collapsed && <UncontrolledAccordionBodyMemo/>}
    </div>
  )
}

export default UncontrolledAccordion;