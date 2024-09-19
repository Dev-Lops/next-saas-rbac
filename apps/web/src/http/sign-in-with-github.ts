import type {
  SignInWithGithubRequest,
  SignInWithGithubResponse,
} from '@/interfaces/sign-in-with-github-interface'

import { api } from './api-client'

export async function signInWithGithub({ code }: SignInWithGithubRequest) {
  const result = await api
    .post('sessions/github', {
      json: {
        code,
      },
    })
    .json<SignInWithGithubResponse>()

  return result
}
