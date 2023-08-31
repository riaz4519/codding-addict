import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(1)

  const increaseValue = () => {
    setValue((currentState) => {
      const newState = currentState + 1
      console.log(newState)
      return newState
    })
  }

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h2>{value}</h2>
      <button className="btn" type="button" onClick={increaseValue}>
        increase
      </button>
    </>
  )
}

export default UseStateGotcha
