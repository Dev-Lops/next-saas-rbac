import type { GetMembersResponse } from '@/interfaces/get-members-interface'
import { api } from './api-client'



export async function getMembers(org: string) {
  const result = await api
    .get(`organizations/${org}/members`, {
      next: {
        tags: [`${org}/members`],
      },
    })
    .json<GetMembersResponse>()

  return result
}