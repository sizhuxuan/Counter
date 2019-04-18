//导入actionTypes
import { INCREMENT, DECREMENT } from './../actionTypes'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.count
    case DECREMENT:
      return state - action.count
    default:
      return state
  }
}

//导出reducer
export default reducer
