const store = require('./store')

const unSubstcribe = store.subscribe(() => {
  console.log('订阅数据的变化', store.getState())
})

// 修改store中的数据,必须使用 action
store.dispatch({ type: 'change_name', name: 'kobe' })
store.dispatch({ type: 'change_name', name: '张三' })

unSubstcribe() // 取消订阅

store.dispatch({ type: 'change_age', age: 28 })
