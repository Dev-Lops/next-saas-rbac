import type { getOrganizationsResponse } from '@/interfaces/get-organizations-interfaces'

import { api } from './api-client'

export async function getOrganizations() {
  try {
    const result = await api
      .get('organizations')
      .json<getOrganizationsResponse>()
    return result
  } catch (error) {
    console.error('Erro ao buscar organizações:', error)
    throw new Error('Não foi possível buscar as organizações.')
  }
}
