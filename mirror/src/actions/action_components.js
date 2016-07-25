import axios from 'axios'

export const FETCH_COMPONENTS = 'FETCH_COMPONENTS'

export function fetchComponents() {
  // const url = `https://react-mirror-server.herokuapp.com/components`
  const url = `http://localhost:5000/components`
  const request = axios.get(url)

  return {
    type: FETCH_COMPONENTS,
    payload: request
  }
}