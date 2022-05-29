import React, {useEffect, useState} from 'react';

export const ResetUseEffect = () => {
  console.log("ResetUseEffect");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect occurred')

    return () => {
      console.log('RESET EFFECT')
    }

  }, [])

  return (
    <div>
      Hello counter: {counter}
      <button onClick={() => {setCounter(counter+1)}}>+++</button>
    </div>
  );
};

export const KeysTracker = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      console.log(e.key)
      setText(text + e.key)
    })

    window.addEventListener('keypress', handler)
    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [text])

  return(
    <div>Typed Text: {text}</div>
  )

}