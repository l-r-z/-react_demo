const store = require('./store')
const { changeNameAction, changeAgeAction } = require('./store/actionCreators')
/**
 * redux 代码优化
 * 1.将派发的action生成过程放到一个 actionCreators函数中
 * 2.将定义的所有actionCreators函数放到一个独立的文件中,actionCreators.js
 * 3.actionCreatiorsj函数中和reducer函数使用的字符串常量是一致的,可以将常量提取出来存储在单独的constants文件中
 * 4.reducer存函数中switch业务逻辑代码会越来越庞大,直接将reducer函数和默认值(initialState)放到一个单独的reducer.js文件中,而不是存放在index.js中
 */

const unSubstcribe = store.subscribe(() => {
  console.log('订阅数据的变化', store.getState())
})

// actionCreators:帮助我们动态创建action
// const changeNameAction = name => ({ type: 'change_name', name })

// 修改store中的数据,必须使用 action
store.dispatch(changeNameAction('张三'))
store.dispatch(changeNameAction('李四'))

// unSubstcribe() // 取消订阅

// 修改age
// const changeAgeAction = age => ({ type: 'change_age', age })
store.dispatch(changeAgeAction(998))
