import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

export const Clock = React.memo(() => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState(false)

  const get2digitsString = (number: number) => number < 10 ? '0' + number : number;

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    }
  }, []);

  let view;

  switch (mode) {
    case false: {
      view = <DigitalClock date={date}/>
      break
    }
    case true:
    default: {
      view = <AnalogClock date={date}/>
    }
  }

  return (
    <div>
      <button onClick={() => setMode(!mode)}>mode</button>
      {view}
    </div>
  );
})

type DigitalClockPropsType = {
  date: Date
}

const DigitalClock: React.FC<DigitalClockPropsType> = ({date}) => {
  const get2digitsString = (number: number) => number < 10 ? '0' + number : number;
  return (
    <div>
      <span>{get2digitsString(date.getHours())}</span>
      :
      <span>{get2digitsString(date.getMinutes())}</span>
      :
      <span>{get2digitsString(date.getSeconds())}</span>
    </div>
  )
}

function AnalogClock({date}: DigitalClockPropsType) {
  const secondsStyle = {
    transform: `rotate(${date.getSeconds() * 6}deg)`
  };
  const minutesStyle = {
    transform: `rotate(${date.getMinutes() * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${date.getHours() * 30}deg)`
  };
  return (
    <div className={s.clock}>
      <div className={s['analog-clock']}>
        <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
        <div className={`${s.dial} ${s.minutes}`} style={minutesStyle} />
        <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
      </div>
    </div>
  )
}