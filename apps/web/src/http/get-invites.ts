import { api } from './api-client'
import type { GetInvitesResponse } from '@/interfaces/get-invites-interface'

export async function getInvites(org: string) {
  const result = await api
    .get(`organizations/${org}/invites`, {
      next: {
        tags: [`${org}/invites`],
      },
    })
    .json<GetInvitesResponse>()

  return result
}