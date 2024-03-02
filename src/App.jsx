import { useState } from "react"

const Display = (props) => {
  return(
    <div>{props.counter}</div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0) //When the state modifying function setCounter is called,
// React re-renders the component which means that the function body of the component function gets re-executed
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>Plus</button>
      <button onClick={setToZero}>Zero</button>

    </>
  )
}

export default App