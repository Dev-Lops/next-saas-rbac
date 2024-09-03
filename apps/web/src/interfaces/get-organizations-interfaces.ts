export interface getOrganizationsResponse {
  organizations: {
    id: string;
    name: string;
    slug: string;
    avatarUrl: string | null;
  }[]
}