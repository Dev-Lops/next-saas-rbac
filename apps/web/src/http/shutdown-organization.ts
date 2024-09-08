import type { ShutdownOrganizationRequest } from "@/interfaces/shutdown-organization-interface";
import { api } from "./api-client";

export async function shutdownOrganization({
  org,
}: ShutdownOrganizationRequest) {
  await api.delete(`organizations/${org}`)
}