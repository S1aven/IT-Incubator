import React, {useCallback, useMemo, useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import PageTitle from "./Components/PageTitle/PageTitle";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledInput} from "./Components/Input/UncontrolledInput";
import {ControlledInput} from "./Components/Input/ControlledInput";
import {Select} from "./Components/Select/Select";
import {Example1} from "./Components/ReactMemo/ReactMemo";
import {DifficultCountingExample, HelpsToReactMemo} from "./Components/UseMemo/UseMemo";
import {UseState} from "./Components/UseState/UseState";
import {UseEffect} from "./Components/UseEffect/UseEffect";
import {SetTimeout} from "./Components/SetTimeout/SetTimeout";
import {Clock} from "./Components/Clock/Clock";
import {KeysTracker, ResetUseEffect} from "./Components/ResetUseEffect/ResetUseEffect";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

export type StateType = {
  id: number
  title: string
  value: ValueType
}

export type StateSelectType = {
  value: string
  title: string
}

export type AccordionItemsType = {
  id: number
  title: string
}

const AccordionMemo = React.memo(Accordion)
const OnOffMemo = React.memo(OnOff)
// const PageTitleMemo = React.memo(PageTitle)
// const RatingMemo = React.memo(Rating)
const SelectMemo = React.memo(Select)
const UncontrolledAccordionMemo = React.memo(UncontrolledAccordion)
const UncontrolledOnOffMemo = React.memo(UncontrolledOnOff)
const UncontrolledRatingMemo = React.memo(UncontrolledRating)
const ControlledInputMemo = React.memo(ControlledInput)
const UncontrolledInputMemo = React.memo(UncontrolledInput)
const Example1Memo = React.memo(Example1)
const HelpsToReactMemoMemo = React.memo(HelpsToReactMemo)
const UseStateReactMemo = React.memo(UseState)
const UseEffectReactMemo = React.memo(UseEffect)
const SetTimeoutReactMemo = React.memo(SetTimeout)
const ResetUseEffectMemo = React.memo(ResetUseEffect)

function App() {
  console.log('App rendering');

  const state: StateType[] = [
    {id: 1, title: "star1 ", value: 1},
    {id: 2, title: "star2 ", value: 2},
    {id: 3, title: "star3 ", value: 3},
    {id: 4, title: "star4 ", value: 4},
    {id: 5, title: "star5 ", value: 5},
  ]

  const stateSelect: StateSelectType[] = [
    {value: '1', title: 'js'},
    {value: '2', title: 'css'},
    {value: '3', title: 'react'},
    {value: '4', title: 'redux'},
    {value: '5', title: 'nodeJs'},
    {value: '6', title: 'html'},
  ]

  const AccordionItems: AccordionItemsType[] = [
    {id: 1, title: "JS"},
    {id: 2, title: "CSS"}
  ]

  const [value, setValue] = useState<ValueType>(0)
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState<string | null>('2')

  // Select
  const memoizedOnSelectClick = useCallback((value: string) => {
    setSelectValue(value)
  }, [])

  // Accordion
  // const collapsedChange = () => {
  //   setCollapsed(!collapsed)
  // }

  const memoizedCollapsedChange = useCallback(() => {
    setCollapsed(!collapsed)
  }, [collapsed])

  // const onClick = (id: number) => {
  //   alert(id)
  // }

  const memoizedOnClick = useCallback((id: number) => {
    alert(id)
  }, [])

  const memoizedSetValue = useCallback((value: ValueType) => {
    setValue(value)
  }, [value])
  //
  // const memoizedSetActive = useMemo(() => {
  //   return setActive
  // }, [active])

  return (
    <div className="App">
      {/*<PageTitleMemo title={'This is APP component'}/>*/}
      {/*<PageTitleMemo title={'My friends'}/>*/}
      <AccordionMemo
        title={'Menu'}
        AccordionItems={AccordionItems}
        collapsed={collapsed}
        collapsedChange={memoizedCollapsedChange}
        onClick={memoizedOnClick}
      />
      {/*<AccordionMemo title={'Users'} collapsed={true}/>*/}
      <UncontrolledAccordionMemo title={'Tasks'}/>
      <Rating
        state={state}
        // valueStarChange={setValue}
        valueStarChange={memoizedSetValue}
        value={value}
      />
      {/*<RatingMemo value={0}/>*/}
      {/*<RatingMemo value={1}/>*/}
      {/*<RatingMemo value={2}/>*/}
      {/*<RatingMemo value={3}/>*/}
      {/*<RatingMemo value={4}/>*/}
      {/*<RatingMemo value={5}/>*/}
      <UncontrolledRatingMemo/>
      <UncontrolledOnOffMemo onChange={setActive}/> {active.toString()}
      <OnOffMemo setActive={setActive} active={active}/>
      <UncontrolledInputMemo/>
      <ControlledInputMemo value={inputValue} setInputValue={setInputValue}/>
      <SelectMemo stateSelect={stateSelect} value={selectValue} onSelectClick={memoizedOnSelectClick}/>
      <Example1Memo/>
      <DifficultCountingExample/>
      <HelpsToReactMemoMemo/>
      <div className='SelectGroup'>
        <SelectMemo stateSelect={stateSelect} value={selectValue} onSelectClick={memoizedOnSelectClick}/>
        <SelectMemo stateSelect={stateSelect} value={selectValue} onSelectClick={memoizedOnSelectClick}/>
        <SelectMemo stateSelect={stateSelect} value={selectValue} onSelectClick={memoizedOnSelectClick}/>
      </div>
      <UseStateReactMemo/>
      {/*<UseEffectReactMemo/>*/}
      <SetTimeoutReactMemo/>
      <Clock/>
      <ResetUseEffectMemo/>
      <KeysTracker/>
    </div>
  )
}

export default App;
