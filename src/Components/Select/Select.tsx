import React, {useState} from 'react';
import {StateSelectType} from "../../App";

type PropsType = {
  stateSelect: StateSelectType[]
}

export const Select: React.FC<PropsType> = (props) => {

  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <div>
      <div
        onClick={()=> setCollapsed(!collapsed)}
        onBlur={() => setCollapsed(false)}
      >menu</div>
      {collapsed && props.stateSelect.map(i => <div key={i.id} id={i.id} >{i.title}</div> )}
    </div>
  );
};