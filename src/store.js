//导入createStore
import { createStore } from 'redux'
//导入reducer
import reducer from './reducer'

//创建store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

