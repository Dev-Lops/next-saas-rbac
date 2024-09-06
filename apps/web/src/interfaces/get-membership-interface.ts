import { Role } from '@saas/auth';

export interface getMembershipResponse {
  membership: {
    id: string
    role: Role
    organizationId: string
    userId: string
  }
}