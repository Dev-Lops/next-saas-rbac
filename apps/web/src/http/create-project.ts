import type {
  CreateProjectRequest,
  CreateProjectResponse,
} from '@/interfaces/create-project-interface'

import { api } from './api-client'

export async function createProject({
  org,
  name,
  description,
}: CreateProjectRequest): Promise<CreateProjectResponse> {
  await api.post(`organizations/${org}/projects`, {
    json: {
      name,
      description,
    },
  })
}
