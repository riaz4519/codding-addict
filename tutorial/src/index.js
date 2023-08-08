import React from 'react'
import ReactDOM from 'react-dom/client'

const Greetings = () => {
  return (
    <div>
      <h1>My First Component</h1>
    </div>
  )
}

// const Greetings = () => {
//   return React.createElement('h2', {}, 'Hello world!')
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greetings />)
