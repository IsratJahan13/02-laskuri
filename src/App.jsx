import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0) //When the state modifying function setCounter is called,
// React re-renders the component which means that the function body of the component function gets re-executed

  setTimeout(
    () => setCounter(counter + 1), 1000
  )
  //Every time the setCounter modifies the state it causes the component to re-render. 
  //The value of the state will be incremented again after one second, and this will continue to repeat for as long as the application is running.
  console.log('rendering...', counter)

  return (
    <>
      {counter}
    </>
  )
}

export default App