import {
  signInWithPasswordRequest,
  type signInWithPasswordResponse,
} from './../interfaces/sign-in-with-password-request'
import { api } from './api-client'

export async function signInWithPassword({
  email,
  password,
}: signInWithPasswordRequest) {
  try {
    const result = await api
      .post('sessions/password', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
      .json<signInWithPasswordResponse>()

    return result
  } catch (error) {
    console.error('Error during sign-in:', error)
    throw error
  }
}
