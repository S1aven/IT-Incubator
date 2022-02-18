import React, {useState} from "react";
import UncontrolledAccordionTitle from "./UncontrolledAccordionTitle/UncontrolledAccordionTitle";
import UncontrolledAccordionBody from "./UncontrolledAccordionBody/UncontrolledAccordionBody";

type AccordionPropsType = {
  title: string
  // collapsed: boolean
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
  //
  // if (props.collapsed) {
  //   return (
  //     <div>
  //       <UncontrolledAccordionTitle title={props.title}/>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <UncontrolledAccordionTitle title={props.title}/>
  //       <UncontrolledAccordionBody/>
  //     </div>
  //   )
  // }
}

export default UncontrolledAccordion;