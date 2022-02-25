import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
  active: boolean
  setActive: (active: boolean) => void
}

function OnOff(props: OnOffPropsType) {

  const indicatorStyle = {
    width: '15px',
    height: '15px',
    backgroundColor: props.active ? 'darkseagreen' : 'crimson',
    display: 'inline-block',
    marginLeft: '20px',
    borderRadius: '50%',
  }
  const offStyle = {
    backgroundColor: props.active ? 'white' : 'crimson',
  }
  const onStyle = {
    backgroundColor: props.active ? 'darkseagreen' : 'white',
  }

  return (
    <div>
      <button style={onStyle} onClick={() => {props.setActive(true)}}>on</button>
      <button style={offStyle} onClick={() => {props.setActive(false)}}>off</button>
      <div style={indicatorStyle}></div>
    </div>
  );
}

export default OnOff;
