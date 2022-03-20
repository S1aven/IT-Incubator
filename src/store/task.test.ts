import {ActionType, div, mult, numberReducer, sub, sum} from "./task";

test('sum of two number', () => {
//  1. тестовые данные:

  const a: number = 10
  const b: number = 20

//  2. выполнение тестиркемого кода:

  const result = sum(a, b)

//  3. проверка результата:

  expect(result).toBe(30)

})

test('subtract of two number', () => {

  expect(sub(20, 10)).toBe(10)

})

test('div of two number', () => {

  expect(div(20, 10)).toBe(2)

})

test('mult of two number', () => {

  expect(mult(20, 10)).toBe(200)

})

test('sum with numberReducer', () => {

  const salary: number = 1000
  const action: ActionType = {
    type: 'SUM',
    num: 300
  }
  const result = numberReducer(salary, action)
  expect(result).toBe(1300)
})

test('sub with numberReducer', () => {

  const salary: number = 1000
  const action: ActionType = {
    type: 'SUB',
    num: 300
  }
  const result = numberReducer(salary, action)
  expect(result).toBe(700)
})

test('div with numberReducer', () => {

  const salary: number = 1000
  const action: ActionType = {
    type: 'DIV',
    num: 200
  }
  const result = numberReducer(salary, action)
  expect(result).toBe(500)
})

test('mult with numberReducer', () => {

  const salary: number = 1000
  const action: ActionType = {
    type: 'MULT',
    num: 300
  }
  const result = numberReducer(salary, action)
  expect(result).toBe(300000)
})