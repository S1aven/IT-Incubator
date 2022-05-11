import React, {useRef, useState} from 'react';

export function UncontrolledInput() {

  console.log('UncontrolledInput')

  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return (
    <div>
      <><input ref={inputRef}
        // onChange={(e) => setValue(e.currentTarget.value)}
      /> - {value}
        <button onClick={save}>save</button>
        - actual: {value}
      </>
    </div>
  );
};