import type { Role } from "@saas/auth"

export interface CreateInviteRequest {
  org: string
  email: string
  role: Role
}

export type CreateInviteResponse = void