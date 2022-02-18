import React from "react";
import {StateType} from "../UncontrolledRating";

type StarPropsType = {
  state: StateType
  selected: boolean
  valueChange: (value: number) => void
}

function UncontrolledStar(props: StarPropsType) {

  console.log('UncontrolledStar rendering');
  return (
    <>
      {/*{props.selected && <span><b>star </b></span>}*/}
      {/*{!props.selected && <span onClick={() => {props.valueChange(2)}}>star </span>}*/}
      {props.selected ? <span onClick={() => {props.valueChange(props.state.id)}}><b>{props.state.title}</b></span>
        : <span onClick={() => {props.valueChange(props.state.id)}}>{props.state.title}</span>}
    </>
  )


  // if (props.selected) {
  //   return <span><b>star </b></span>
  // } else {
  //   return <span>star </span>
  // }
}

export default UncontrolledStar;