import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

type OnOffPropsType = {
  // active: boolean
}

function UncontrolledOnOff(props: OnOffPropsType) {

  const [active, setActive] = useState(false);

  const indicatorStyle = {
    width: '15px',
    height: '15px',
    backgroundColor: active ? 'darkseagreen' : 'crimson',
    display: 'inline-block',
    marginLeft: '20px',
    borderRadius: '50%',
  }
  const offStyle = {
    backgroundColor: active ? 'white' : 'crimson',
  }
  const onStyle = {
    backgroundColor: active ? 'darkseagreen' : 'white',
  }

  return (
    <div>
      <button style={onStyle} onClick={() => {setActive(true)}}>on</button>
      <button style={offStyle} onClick={() => {setActive(false)}}>off</button>
      <div style={indicatorStyle}></div>
    </div>
  );
}

export default UncontrolledOnOff;
