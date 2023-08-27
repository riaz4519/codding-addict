import { useState } from 'react'

const ErrorExample = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default ErrorExample
