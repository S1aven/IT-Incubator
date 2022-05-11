import React, {ReactNode, useMemo, useState} from "react";
import UncontrolledStar from "./Star/UncontrolledStar";

export type ValueType =0 | 1 | 2 | 3 | 4 | 5

export type StateType = {
  id: number
  title: string
  value: ValueType
}

const UncontrolledStarMemo = React.memo(UncontrolledStar)

function UncontrolledRating() {
  console.log('UncontrolledRating')

  const state: StateType[] = [
    {id: 1, title: "star_1 " , value: 1},
    {id: 2, title: "star_2 " , value: 2},
    {id: 3, title: "star_3 " , value: 3},
    {id: 4, title: "star_4 " , value: 4},
    {id: 5, title: "star_5 " , value: 5},
  ]

  const [value, setValue] = useState<ValueType>(0)

  const valueChange = (value: ValueType) => {
    setValue(value)
  }

  const newState = useMemo(() => {
    return state.map(s => <UncontrolledStarMemo
      key={s.id}
      state={s}
      selected={value >= s.value}
      valueChange={valueChange}
    />)
  }, [state])

  // const newState = state.map(s => <UncontrolledStarMemo
  //   key={s.id}
  //   state={s}
  //   selected={value >= s.value}
  //   valueChange={valueChange}
  // />)

  return (
    <div>неконтр-----
      {newState}
    </div>
  )
}

export default UncontrolledRating;