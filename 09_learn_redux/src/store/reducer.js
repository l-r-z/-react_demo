const constants = require('./constants')
// 初始化的数据
const initialState = {
  name: 'coderwhy',
  age: 18,
}

// 定义reducer函数 注意,这个要求是一个纯函数,用于修改store数据
// 参数一:store目前存储的数据
// 参数二:传进来的action,本次需要更新的数据
// 返回值:它的返回值作为store之后存储的state
function reducer(state = initialState, action) {
  // 有新的数据更新，返回新的state没有则返回旧的state

  switch (action.type) {
    case constants.CHANGE_NAME:
      return { ...state, name: action.name }
    case constants.CHANGE_AGE:
      return { ...state, age: action.age }

    default:
      return state
  }
}

module.exports = reducer
