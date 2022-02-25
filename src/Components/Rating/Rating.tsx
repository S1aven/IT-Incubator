import React from "react";
import Star from "./Star/Star";
import {StateType} from "../../App";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  state: StateType[]
  value: ValueType
  valueStarChange: (value: ValueType) => void
}

function Rating(props: RatingPropsType) {

  const newState = props.state.map(s => <Star
    key={s.id}
    selected={props.value >= s.value}
    state={s}
    valueStarChange={props.valueStarChange}
  />)

  return (
    <div>
      {newState}
    </div>
  )
}

export default Rating;