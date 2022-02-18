import React, {useState} from "react";
import UncontrolledStar from "./Star/UncontrolledStar";

type RatingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5
}

export type StateType = {
  id: number
  title: string
}

function UncontrolledRating(props: RatingPropsType) {

  const state: StateType[] = [
    {id: 1, title: "star_1 "},
    {id: 2, title: "star_2 "},
    {id: 3, title: "star_3 "},
    {id: 4, title: "star_4 "},
    {id: 5, title: "star_5 "},
  ]

  const [value, setValue] = useState<number>(0)

  const valueChange = (value: number) => {
    setValue(value)
  }

  const newState = state.map(s => <UncontrolledStar
    key={s.id}
    state={s}
    selected={value >= s.id}
    valueChange={valueChange}
  />)

  return (
    <div>
      {newState}
      {/*<UncontrolledStar id={1} valueChange={valueChange} selected={value >= 1}/>*/}
      {/*<button onClick={() => {setValue(1)}}>1</button>*/}
      {/*<UncontrolledStar id={2} valueChange={valueChange} selected={value >= 2}/>*/}
      {/*<button onClick={() => {setValue(2)}}>2</button>*/}
      {/*<UncontrolledStar id={3} valueChange={valueChange} selected={value >= 3}/>*/}
      {/*<button onClick={() => {setValue(3)}}>3</button>*/}
      {/*<UncontrolledStar id={4} valueChange={valueChange} selected={value >= 4}/>*/}
      {/*<button onClick={() => {setValue(4)}}>4</button>*/}
      {/*<UncontrolledStar id={5} valueChange={valueChange} selected={value >= 5}/>*/}
      {/*<button onClick={() => {setValue(5)}}>5</button>*/}
    </div>
  )

  // if (props.value === 1) {
  //   return (
  //     <div>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={false}/>
  //       <UncontrolledStar selected={false}/>
  //       <UncontrolledStar selected={false}/>
  //       <UncontrolledStar selected={false}/>
  //     </div>
  //   )
  // }
  // if (props.value === 2) {
  //   return (
  //     <div>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={false}/>
  //       <UncontrolledStar selected={false}/>
  //       <UncontrolledStar selected={false}/>
  //     </div>
  //   )
  // }
  // if (props.value === 3) {
  //   return (
  //     <div>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={false}/>
  //       <UncontrolledStar selected={false}/>
  //     </div>
  //   )
  // }
  // if (props.value === 4) {
  //   return (
  //     <div>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={false}/>
  //     </div>
  //   )
  // }
  // if (props.value === 5) {
  //   return (
  //     <div>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={true}/>
  //       <UncontrolledStar selected={true}/>
  //     </div>
  //   )
  // }
  //
  // return (
  //   <div>
  //     <UncontrolledStar selected={false}/>
  //     <UncontrolledStar selected={false}/>
  //     <UncontrolledStar selected={false}/>
  //     <UncontrolledStar selected={false}/>
  //     <UncontrolledStar selected={false}/>
  //   </div>
  // )
}

export default UncontrolledRating;