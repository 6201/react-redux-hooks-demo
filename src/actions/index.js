const increment = () => {
  return {
    type: 'increment-counter'
  }
}
const diminished = () => {
  return {
    type: 'diminished-counter'
  }
}

const asyncData = () => {
  return {
    type: 'ASYNC_DATA'
  }
}
export { increment, diminished, asyncData }
