import React, {useReducer} from "react";
import UncontrolledAccordionTitle from "./UncontrolledAccordionTitle/UncontrolledAccordionTitle";
import UncontrolledAccordionBody from "./UncontrolledAccordionBody/UncontrolledAccordionBody";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
  title: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log('UncontrolledAccordion rendering');

  // const [collapsed, setCollapsed] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, {collapsed: false})

  const activeCollapsed = () => {
    dispatch({type: TOGGLE_COLLAPSED})
  }

  return (
    <div>
      <UncontrolledAccordionTitle activeCollapsed={activeCollapsed} title={props.title}/>
      {!state.collapsed && <UncontrolledAccordionBody/>}
    </div>
  )
}

export default UncontrolledAccordion;