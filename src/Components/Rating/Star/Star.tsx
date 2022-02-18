import React from "react";

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {

  console.log('UncontrolledStar rendering');
  return (
    <>
      {props.selected && <span><b>star </b></span>}
      {!props.selected && <span>star </span>}
    </>
  )


  // if (props.selected) {
  //   return <span><b>star </b></span>
  // } else {
  //   return <span>star </span>
  // }
}

export default Star;