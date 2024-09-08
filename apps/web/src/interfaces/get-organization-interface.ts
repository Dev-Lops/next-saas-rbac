export interface GetOrganizationResponse {
  organization: {
    slug: string
    id: string
    name: string
    domain: string | null
    shouldAttachUsersByDomain: boolean
    avatarUrl: string | null
    createdAt: string
    updatedAt: string
    ownerId: string
  }
}