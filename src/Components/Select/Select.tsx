import React, {KeyboardEvent, useEffect, useState} from 'react';
import {StateSelectType} from "../../App";
import s from './Select.module.css'

type PropsType = {
  stateSelect: StateSelectType[]
  value: string | null
  onSelectClick: (value: string) => void
}

export const Select: React.FC<PropsType> = (props) => {

  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [hoveredElementValue, setHoveredElementValue] = useState<string | null>(props.value)

  const selectItem = props.stateSelect.find(e => e.value === props.value)
  const hoveredElement = props.stateSelect.find(e => e.value === hoveredElementValue)

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])

  const onItemClick = (value: string) => {
    props.onSelectClick(value)
    setCollapsed(!collapsed)
  }

  const onTitleClick = () => {
    setCollapsed(!collapsed)
    setHoveredElementValue(props.value)
  }

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.stateSelect.length; i++) {
        if (props.stateSelect[i].value === hoveredElementValue) {
          const pretendentElement = e.key === "ArrowDown"
            ? props.stateSelect[i + 1]
            : props.stateSelect[i - 1]

          if (pretendentElement) {
            props.onSelectClick(pretendentElement.value)
            // setHoveredElementValue(props.stateSelect[i-1].value)
            return;
          }
        }
      }
      if(!selectItem) {
        props.onSelectClick(props.stateSelect[0].value)
      }
    }

    if (e.key === 'Enter' || e.key === 'Escape') {
      setCollapsed(false)
    }
  }

  return (
    <div className={s.select} onKeyUp={onKeyUp} tabIndex={1}>
      <span
        className={s.title}
        onClick={onTitleClick}
        onBlur={() => setCollapsed(false)}
      >{selectItem && selectItem.title}</span>

      {
        collapsed &&
        <div className={s.list}>
          {props.stateSelect.map(i => <div
            onMouseEnter={() => setHoveredElementValue(i.value)}
            className={hoveredElement === i ? `${s.item} ${s.selected}` : s.item}
            key={i.value}
            id={i.value}
            onClick={() => onItemClick(i.value)}
          >{i.title}</div>)}
        </div>
      }
    </div>
  );
};