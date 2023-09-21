import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  console.log('Render')
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>

      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // logic goes here
    }
    window.addEventListener('scroll', someFunc)
    return () => window.removeEventListener('scroll', someFunc)
  })

  return <h1>Hello There</h1>
}

export default CleanupFunction
