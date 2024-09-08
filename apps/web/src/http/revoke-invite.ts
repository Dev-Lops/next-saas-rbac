import type { RevokeInviteRequest } from '@/interfaces/revoke-invites-interface'
import { api } from './api-client'

export async function revokeInvite({ org, inviteId }: RevokeInviteRequest) {
  await api.delete(`organizations/${org}/invites/${inviteId}`)
}