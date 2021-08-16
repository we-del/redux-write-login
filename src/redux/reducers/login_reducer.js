
import { QUIT, LOGIN } from '../actionsParams'

const initState = 1

export default function login(previousState = initState, action) {
  let newState = null
  let { type, data } = action
  switch (type) {
    case QUIT: return newState = previousState + data
    case LOGIN: return newState = previousState - data
    default: return previousState
  }
}