import { api } from './api-client'
import type { UpdateMemberRequest } from '@/interfaces/update-member-interface'

export async function updateMember({
  org,
  memberId,
  role,
}: UpdateMemberRequest) {
  await api.put(`organizations/${org}/members/${memberId}`, {
    json: { role },
  })
}