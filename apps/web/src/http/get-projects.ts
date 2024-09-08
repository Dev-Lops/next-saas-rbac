import type { GetProjectsResponse } from "@/interfaces/get-projects-interface"
import { api } from "./api-client"

export async function getProjects(org: string) {
  const result = await api
    .get(`organizations/${org}/projects`)
    .json<GetProjectsResponse>()

  return result
}