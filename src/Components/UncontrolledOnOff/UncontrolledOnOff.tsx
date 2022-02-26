import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

type OnOffPropsType = {
  onChange: (active: boolean) => void
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

  const onClicked = () => {
    setActive(true)
    props.onChange(true)
  }

  const offClicked = () => {
    setActive(false)
    props.onChange(false)
  }

  return (
    <div>
      <button
        style={onStyle}
        onClick={onClicked}>on
      </button>
      <button
        style={offStyle}
        onClick={offClicked}>off
      </button>
      <div style={indicatorStyle}></div>
    </div>
  );
}

export default UncontrolledOnOff;
