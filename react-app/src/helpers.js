import { auth } from './firebase'
// const API = 'https://stripe-server-apw6lsu5yq-uc.a.run.app';
// const API = 'http://localhost:3333'
const API = 'http://10.131.130.98:5002/test-project-1-d10d8/us-central1'


/**
 * A helper function to fetch data from your API.
 * It sets the Firebase auth token on the request.
 */
export async function fetchFromAPI(endpointURL, opts) {
  const { method, body } = { method: 'POST', body: null, ...opts }

  const user = auth.currentUser
  const token = user && (await user.getIdToken())

  const res = await fetch(`${API}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return res.json()
}
