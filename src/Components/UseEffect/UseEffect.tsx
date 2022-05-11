import React, {useEffect, useState} from 'react';

export const UseEffect = () => {
  console.log('UseEffect')
  const [state, setState] = useState(1)
  const [fake, setFake] = useState(1)

  useEffect(() => {
    console.log('useEffectHook every render')
    document.title = state.toString()
  })

  useEffect(() => {
    console.log('useEffectHook first render and every state change')
    document.title = state.toString()
  }, [state])

  useEffect(() => {
    console.log('useEffectHook only first render (componentDidMount)')
    document.title = state.toString()
  }, [])

  return (
    <div>
      Hello, {state} {fake}
      <button onClick={() => setState(state + 1)}>state+</button>
      <button onClick={() => setFake(fake + 1)}>fake+</button>
    </div>
  );
};