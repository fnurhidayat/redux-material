import { ADD, INIT } from '../actions/person.js'

const initialState = []

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD:
      return [...state, action.payload]
    case INIT:
      return action.payload
    default:
      return state
  }
}
