import React, {useEffect, useState} from 'react';

export const SetTimeout = () => {
  console.log('SetTimeout');
  const [state, setState] = useState('1');

  useEffect(() => {
    console.log('useEffectHook every render');

    const intervalID = setInterval(() => {
      let time = new Date();
      let time2 = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
      setState(time2);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    }
  }, [state]);

  return (
    <div>
      Hello, state: {state};
    </div>
  );
};