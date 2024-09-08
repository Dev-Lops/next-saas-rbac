import type { CreateInviteRequest, CreateInviteResponse } from '@/interfaces/create-invite-interface'
import { api } from './api-client'


export async function createInvite({
  org,
  email,
  role,
}: CreateInviteRequest): Promise<CreateInviteResponse> {
  await api.post(`organizations/${org}/invites`, {
    json: {
      email,
      role,
    },
  })
}