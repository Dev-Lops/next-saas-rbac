import type { GetOrganizationResponse } from '@/interfaces/get-organization-interface'

import { api } from './api-client'

export async function getOrganization(org: string) {
  const result = await api
    .get(`organizations/${org}`, {
      next: {
        tags: ['organization'],
      },
    })
    .json<GetOrganizationResponse>()

  return result
}
