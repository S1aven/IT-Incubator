import React from "react";
import {StateType, ValueType} from "../UncontrolledRating";

type StarPropsType = {
  state: StateType
  selected: boolean
  valueChange: (value: ValueType) => void
}

function UncontrolledStar(props: StarPropsType) {

  console.log('UncontrolledStar rendering');
  return (
    <>
      <span onClick={() => {props.valueChange(props.state.value)}}>{props.selected ?
        <b>{props.state.title}</b> : props.state.title}
      </span>
    </>
  )
}

export default UncontrolledStar;