import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h2>{text || 'Default Value'}</h2>
      {text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}

      {!text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}

      {user && <SomeComponent user={user.name} />}
      <h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
      <button0 className="btn"> {isEditing ? 'edit' : 'add'} </button0>
      {user ? (
        <div>
          <h4>Hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
        </div>
      )}
    </div>
  )
}

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>Hello there {name}</h4>
      <button className="btn">log out</button>
    </div>
  )
}

export default ShortCircuitExamples
