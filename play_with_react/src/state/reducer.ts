export const reducer = (state = { count: 0 }, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.count + 1 }
    case 'DECREMENT':
      return { counter: state.count - 1 }
    default:
      return state
  }
}

export const actions = {
  increase: () => ({ type: 'INCREMENT' }),
  decrease: () => ({ type: 'DECREMENT' })
}