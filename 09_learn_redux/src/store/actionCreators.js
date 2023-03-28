// 用来存放生成action
const constants = require('./constants')
const changeNameAction = name => ({ type: constants.CHANGE_NAME, name })
const changeAgeAction = age => ({ type: constants.CHANGE_AGE, age })
module.exports = {
  changeNameAction,
  changeAgeAction,
}
