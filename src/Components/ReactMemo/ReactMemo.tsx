import React, {useState} from "react";

export const NewMessageCounter = (props: any) => {
  console.log('NewMessageCounter')
  return <div>{props.count}</div>
}

export const Users = (props: { users: Array<string> }) => {
  return <div>{props.users.map((u, i) =>
  {
    console.log('users')
    return<div key={i}>{u}</div>
  })}</div>
}

const UsersMemo = React.memo(Users)

export const Example1 = () => {
  console.log('example')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['ivan', 'valera', 'jon'])

  const addUser = () => {
    const newUsers = [
      ...users,
      'sveta' + new Date().getTime()
    ]
    setUsers(newUsers)
  }

  return <>
    <div>React Memo</div>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={addUser}>add</button>
    <NewMessageCounter count={counter}/>
    <UsersMemo users={users}/>
  </>
}