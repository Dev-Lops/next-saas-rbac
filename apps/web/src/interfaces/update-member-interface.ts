import type { Role } from '@saas/auth'

export interface UpdateMemberRequest {
  org: string
  memberId: string
  role: Role
}
