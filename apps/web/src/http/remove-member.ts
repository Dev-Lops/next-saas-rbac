import type { RemoveMemberRequest } from '@/interfaces/revoke-members-interface'

import { api } from './api-client'

export async function removeMember({ org, memberId }: RemoveMemberRequest) {
  await api.delete(`organizations/${org}/members/${memberId}`)
}
