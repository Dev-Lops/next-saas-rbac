
export interface CreateOrganizationRequest {
  name: string;
  domain: string | null
  shouldAttachUsersByDomain: boolean
}
export type CreateOrganizationResponse = void