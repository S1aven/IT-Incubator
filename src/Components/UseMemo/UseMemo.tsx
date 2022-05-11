import React, {useCallback, useMemo, useState} from 'react';

export const DifficultCountingExample = () => {

  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 2; i <= a; i++) {
      let fake = 0;
      while (fake < 10000000) {
        fake++
        const fakeValue = Math.random()
      }
      tempResultA = tempResultA * i
    }

    return tempResultA
  }, [a])

  for (let i = 2; i <= b; i++) {
    resultB = resultB * i
  }

  return (
    <div>
      <div>Use Memo</div>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
      <hr/>
      <div>
        Result for a: {resultA}
      </div>
      <div>
        Result for b: {resultB}
      </div>
    </div>
  );
};


export const Users = (props: { users: Array<string> }) => {

  const users = useMemo(() => {
    return props.users.map((u, i) => {
      console.log('Users')
      return <div key={i}>{u}</div>
    })
  }, [props.users])

  return <>
    {users}
  </>
}

const UsersMemo = React.memo(Users)

export const HelpsToReactMemo = () => {
  console.log('HelpsToReactMemo')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['ivan', 'valera', 'jon'])

  // const filterArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)
  const filterArray = useMemo(() => {
    return users.filter(u => u.toLowerCase().indexOf("a") > -1)
  }, [users])

  // const addUser = () => {
  //   const newUsers = [
  //     ...users,
  //     'sveta' + new Date().getTime()
  //   ]
  //   setUsers(newUsers)
  // }

  const memoizedAddUser = useMemo(() => {
    return () => {
      const newUsers = [
        ...users,
        'sveta' + new Date().getTime()
      ]
      setUsers(newUsers)
    }
  }, [users]);

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={memoizedAddUser}>add</button>
    {counter}
    <UsersMemo users={filterArray}/>
  </>
}