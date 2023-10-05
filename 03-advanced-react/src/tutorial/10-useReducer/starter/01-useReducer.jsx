import React, { useReducer, useState } from 'react'
import { data } from '../../../data'
import { RESET_LIST,CLEAR_LIST,REMOVE_ITEM } from './action'
import reducer from './reducer'



const defaultState = {
  people: data,
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)

    dispatch({ type: REMOVE_ITEM, payload: { id: id } })
  }

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
    // setPeople(data)
    dispatch({ type: RESET_LIST })
  }
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}

      {state.people.length ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
