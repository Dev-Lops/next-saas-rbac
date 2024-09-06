import type { getMembershipResponse } from '@/interfaces/get-membership-interface';
import { api } from './api-client';

export async function getMembership(org: string) {
  const result = await api
    .get(`organizations/${org}/membership`)
    .json<getMembershipResponse>()

  return result
}
