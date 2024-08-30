import { signInWithPasswordRequest, type signInWithPasswordResponse } from './../interfaces/sign-in-with-password-request';
import { api } from './api-client';

export async function signInWithPassword({
  email,
  password
}: signInWithPasswordRequest) {
  const result = await api.post('sessions/password', {
    json: {
      email,
      password,
    }
  }).json<signInWithPasswordResponse>()

  return result;
}