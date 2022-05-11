import React, {useState} from 'react';

function generateData() {
  console.log('generateData')
  return 1
}

export const UseState = () => {
  console.log('UseState')

  const [state, setState] = useState(generateData)

  const changer = (state: number) => {
    return state + 1
  }

  return (
    <div>
      <button onClick={() => setState(changer)}>count</button>
      <div>{state}</div>
    </div>
  );
};