
import type { signInWithGitHubRequest, signInWithGitHubResponse } from '@/interfaces/sign-in-with-github-interface';
import { api } from './api-client';

export async function signInWithGitHub({
  code
}: signInWithGitHubRequest) {
  try {
    const result = await api.post('sessions/github', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code
      })
    }).json<signInWithGitHubResponse>();

    return result;
  } catch (error) {
    console.error('Error during sign-in:', error);
    throw error;
  }
}
