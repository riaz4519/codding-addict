import { useState } from 'react'
import { personProfiles } from '../../../data'

const UseStateObject = () => {
  const [person, setPerson] = useState(personProfiles[0])
  const [nextPerson, setNextPerson] = useState(personProfiles[1])

  const getNextPerson = (id) => {
    // set person to show the person profile to the view
    setPerson(personProfiles.find((person) => person.id === id))
    // current person index
    const currentPersonIndex = personProfiles.findIndex((item) => item.id == id)
    // if next person index + 1 is not found then set next person 0 index
    if (personProfiles[currentPersonIndex + 1]) {
      setNextPerson(personProfiles[currentPersonIndex + 1])
    } else {
      setNextPerson(personProfiles[0])
    }
  }

  return (
    <>
      <h2>useState object example</h2>
      <div>
        <h4>{person.name}</h4>
        <h4>{person.age}</h4>
        <h4>{person.hobby}</h4>
      </div>

      <button
        type="button"
        className="btn"
        onClick={() => {
          getNextPerson(nextPerson.id)
        }}
      >
        Show {nextPerson.name}
      </button>
    </>
  )
}

export default UseStateObject
