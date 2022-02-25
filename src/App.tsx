import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import PageTitle from "./Components/PageTitle/PageTitle";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./Components/UncontrolledOnOff/UncontrolledOnOff";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5


export type StateType = {
  id: number
  title: string
  value: ValueType
}

function App() {
  console.log('App rendering');

  const state: StateType[] = [
    {id: 1, title: "star1 ", value: 1},
    {id: 2, title: "star2 ", value: 2},
    {id: 3, title: "star3 ", value: 3},
    {id: 4, title: "star4 ", value: 4},
    {id: 5, title: "star5 ", value: 5},
  ]

  const [value, setValue] = useState<ValueType>(0)
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [active, setActive] = useState(false);

  const collapsedChange = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="App">
      {/*<PageTitle title={'This is APP component'}/>*/}
      {/*<PageTitle title={'My friends'}/>*/}
      <Accordion title={'Menu'} collapsed={collapsed} collapsedChange={collapsedChange}/>
      {/*<Accordion title={'Users'} collapsed={true}/>*/}
      <UncontrolledAccordion title={'tasks'}/>
      <Rating
        state={state}
        valueStarChange={setValue}
        value={value}
      />
      {/*<Rating value={0}/>*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      <UncontrolledRating/>
      {/*<UncontrolledOnOff/>*/}
      <OnOff setActive={setActive} active={active}/>
    </div>
  )
}

export default App;
