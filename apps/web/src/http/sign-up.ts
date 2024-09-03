
import type { signUpRequest, signUpResponse } from '@/interfaces/sign-up-interfaces';
import { api } from './api-client';

export async function signUp({
  name,
  email,
  password
}: signUpRequest): Promise<signUpResponse> {

  await api.post('users', {
    json: {
      name,
      email,
      password
    }
  });
}
