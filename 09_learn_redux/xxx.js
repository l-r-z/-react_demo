function reducer(state = initiaState, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return { ...state, friends: [...state.friends, action.info] }
    case 'INC_AGE':
      return {
        ...state,
        friends: state.friends.map((item, index) => {
          if (index === action.index) {
            return { ...item, age: item.age + 1 }
          }
          return item
        }),
      }
    case 'CHANGE_NAME':
      return {
        ...state,
        friends: state.friends.map((item, index) => {
          if (index === action.index) {
            return { ...item, name: action.newName }
          }
          return item
        }),
      }
    default:
      return state
  }
}
