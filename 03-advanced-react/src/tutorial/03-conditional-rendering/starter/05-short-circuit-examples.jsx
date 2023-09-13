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
      {/* {text && } */}
    </div>
  )
}

export default ShortCircuitExamples
