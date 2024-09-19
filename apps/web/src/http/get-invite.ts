import type { GetInviteResponse } from '@/interfaces/get-invite-interface'

import { api } from './api-client'

export async function getInvite(inviteId: string) {
  const result = await api.get(`invites/${inviteId}`).json<GetInviteResponse>()

  return result
}
