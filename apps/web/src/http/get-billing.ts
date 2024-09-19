import type { GetBillingResponse } from '@/interfaces/get-billing-interface'

import { api } from './api-client'

export async function getBilling(org: string) {
  const result = await api
    .get(`organizations/${org}/billing`)
    .json<GetBillingResponse>()

  return result
}
