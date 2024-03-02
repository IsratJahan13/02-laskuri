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
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <>
      <Display counter={counter}/>
      <Button 
        onClick = {increaseByOne} 
        text = 'Plus'
      />
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