import React, {useCallback, useMemo} from "react";
import {StateType} from "../../../App";
import {ValueType} from "../../UncontrolledRating/UncontrolledRating";

type StarPropsType = {
  selected: boolean
  state: StateType
  valueStarChange: (value: ValueType) => void
}

function Star(props: StarPropsType) {
  console.log('Star rendering');

  return (
    <>
      <span onClick={() => {
        props.valueStarChange(props.state.value)
      }}>
        {props.selected ? <b>{props.state.title}</b>
          : props.state.title}
      </span>
    </>
  )
}

export default Star;