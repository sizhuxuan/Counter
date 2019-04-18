//导入actionTypes
import { INCREMENT, DECREMENT } from './../actionTypes'

//action creator
//+
export const increment = count => {
  return { type: INCREMENT, count }
}

//-
export const decrement = count => {
  return { type: DECREMENT, count }
}
