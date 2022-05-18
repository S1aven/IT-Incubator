import React, {useEffect, useState} from 'react';

export const Clock = React.memo(() => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    }
  }, []);

  const get2digitsString = (number: number) => number < 10 ? '0' + number : number;

  return (
    <div>
      <span>{get2digitsString(date.getHours())}</span>
      :
      <span>{get2digitsString(date.getMinutes())}</span>
      :
      <span>{get2digitsString(date.getSeconds())}</span>
    </div>
  );
})