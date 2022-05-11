import React, {useMemo} from "react";
import Star from "./Star/Star";
import {StateType} from "../../App";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  state: StateType[]
  value: ValueType
  valueStarChange: (value: ValueType) => void
}

const StarMemo = React.memo(Star)

function Rating(props: RatingPropsType) {
  console.log('Rating')

  const newState = useMemo(() => {
    return props.state.map(s => <StarMemo
      key={s.id}
      state={s}
      selected={props.value >= s.value}
      valueStarChange={props.valueStarChange}
    />)
  }, [props.state])

  return (
    <div>контр----
      {newState}
    </div>
  )
}

export default React.memo(Rating);