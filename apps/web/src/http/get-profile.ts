import type { getProfileResponse } from '@/interfaces/get-profile-interface'

import { api } from './api-client'

export async function getProfile() {
  try {
    const result = await api.get('profile', {}).json<getProfileResponse>()

    return result
  } catch (error) {
    console.error('Error during sign-in:', error)
    throw error
  }
}
