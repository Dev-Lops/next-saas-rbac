import type {
  CreateOrganizationRequest,
  CreateOrganizationResponse,
} from '@/interfaces/create-organization-interface'

import { api } from './api-client'

export async function createOrganization({
  name,
  domain,
  shouldAttachUsersByDomain,
}: CreateOrganizationRequest): Promise<CreateOrganizationResponse> {
  await api.post('organizations', {
    json: {
      name,
      domain,
      shouldAttachUsersByDomain,
    },
  })
}
