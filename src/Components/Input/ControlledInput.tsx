import React, {ChangeEvent, useState} from 'react';

type PropsType = {
  value: string
  setInputValue: (inputValue: string) => void
}

export function ControlledInput(props: PropsType) {
  console.log('ControlledInput')

  const [checkedValue, setCheckedValue] = useState(true)
  const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(e.currentTarget.value)
  }
  const onChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(e.currentTarget.checked)
  }
   const onSelected = (e: ChangeEvent<HTMLSelectElement>) => {
     setSelectValue(e.currentTarget.value)
  }


  return (
    <> контролир импут
      <div>
        <input value={props.value} onChange={onChange}/>
      </div>

      <div>
        <input type='checkbox' checked={checkedValue} onChange={onChecked}/>
      </div>

      <select value={selectValue} onChange={onSelected}>
        <option>none</option>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Kiev</option>
      </select>
    </>

  );
}