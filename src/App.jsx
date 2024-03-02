import { useState } from "react"

const Display = (props) => {
  return(
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0) //When the state modifying function setCounter is called,
// React re-renders the component which means that the function body of the component function gets re-executed
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <Display counter={counter}/>
      <Button 
        onClick = {increaseByOne} 
        text = 'Plus'
      />
      <button onClick={increaseByOne}>Plus</button>
      <Button 
        onClick = {setToZero}
        text = 'zero'
      />
      <Button 
        onClick = {decreaseByOne} 
        text = 'Minus'
      />
    </>
  )
}

export default App