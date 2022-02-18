import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
  // active: boolean
}

function OnOff(props: OnOffPropsType) {

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
    // <div className={s.buttonPanel}>
    //   {props.active && <button className={s.onActive}>on</button>}
    //   {!props.active && <button>on</button>}
    //
    //   {!props.active && <button className={s.offActive}>off</button>}
    //   {props.active && <button>off</button>}
    //
    //   {props.active && <div className={s.signalOn}> </div>}
    //   {!props.active && <div className={s.signalOff}> </div>}
    // </div>
    <div>
      <button style={onStyle} onClick={() => {setActive(true)}}>on</button>
      <button style={offStyle} onClick={() => {setActive(false)}}>off</button>
      <div style={indicatorStyle}></div>
    </div>
  );
}

export default OnOff;
