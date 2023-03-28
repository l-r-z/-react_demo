const store = require('./store')
console.log(store.getState())

// 修改store中的数据,必须使用 action
const nameAction = { type: 'change_name', name: 'kobe' }
store.dispatch(nameAction)
console.log(store.getState())

const ageAction = { type: 'chang_age', age: 28 }
store.dispatch(ageAction)
console.log(store.getState())
