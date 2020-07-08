export default function(state = 1, action) {
  switch (action.type) {
    case 'increment-counter':
      return state + 1
    case 'diminished-counter':
      return state - 1
    default:
      return state
  }
}
