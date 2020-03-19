export default function(state = {count: 0}, action) {
  switch (action.type) {
    case 'increment-counter':
      return {
        ...state,
        count: state.count+1
      }
    case 'diminished-counter':
      return {
        ...state,
        count: state.count-1
      }
    default:
      return state
  }
}
