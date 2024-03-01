import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0) //When the state modifying function setCounter is called,
// React re-renders the component which means that the function body of the component function gets re-executed

const handleClick = () => {
  console.log('clicked')
}
  return (
    <>
      {counter}
      <button onClick={handleClick}>Plus</button>
    </>
  )
}

export default App