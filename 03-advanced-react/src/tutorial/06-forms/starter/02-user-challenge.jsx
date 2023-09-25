import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    //prevent default
    e.preventDefault()

    // if name is empty we don do anything we return
    if (!name) return

    // data have two value on is id another is name value.
    // we don't have the  id so generate by time
    const fakeId = Date.now()

    const newUser = { id: fakeId, name: name }

    // add the user
    setUsers([...users, newUser])

    // empty setName
    setName('')
  }

  const removeUser = (userId) => {
    setUsers(users.filter((user) => user.id != userId))
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <button
              type="button"
              onClick={() => removeUser(user.id)}
              className="btn"
            >
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
