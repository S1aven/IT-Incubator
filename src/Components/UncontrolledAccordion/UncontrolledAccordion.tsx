import React, {useState} from "react";
import UncontrolledAccordionTitle from "./UncontrolledAccordionTitle/UncontrolledAccordionTitle";
import UncontrolledAccordionBody from "./UncontrolledAccordionBody/UncontrolledAccordionBody";

type AccordionPropsType = {
  title: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log('UncontrolledAccordion rendering');

  const [collapsed, setCollapsed] = useState<boolean>(false)

  const activeCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <UncontrolledAccordionTitle activeCollapsed={activeCollapsed} title={props.title}/>
      {!collapsed && <UncontrolledAccordionBody/>}
    </div>
  )
}

export default UncontrolledAccordion;