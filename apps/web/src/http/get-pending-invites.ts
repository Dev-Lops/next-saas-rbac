import type { GetPendingInvitesResponse } from '@/interfaces/get-pending-invites-interface'

import { api } from './api-client'

export async function getPendingInvites() {
  const result = await api
    .get('pending-invites')
    .json<GetPendingInvitesResponse>()

  return result
}
