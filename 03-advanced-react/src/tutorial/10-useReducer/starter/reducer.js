import { RESET_LIST, CLEAR_LIST, REMOVE_ITEM } from './action'
import { data } from '../../../data'
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data }
  } else if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload.id),
    }
  }

  throw new Error(`No matching  ${action.type} - action type`)
}

export default reducer;