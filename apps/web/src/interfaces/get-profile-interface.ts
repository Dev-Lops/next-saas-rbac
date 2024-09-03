export interface getProfileResponse {
  user: {
    name: string | null;
    id: string;
    avatarUrl: string | null;
    email: string;
  }
}