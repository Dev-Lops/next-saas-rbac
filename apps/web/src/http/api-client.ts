import { env } from '@saas/env'
import { getCookie } from 'cookies-next'
import ky from 'ky'

// Criação do cliente API com ky
export const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL, // Defina a URL base da sua API
  hooks: {
    beforeRequest: [
      async (request) => {
        let token: string | undefined

        // Verifica se o código está sendo executado no servidor ou no cliente
        if (typeof window === 'undefined') {
          // Ambiente de servidor - importa cookies do Next.js
          const { cookies } = await import('next/headers')
          token = cookies().get('token')?.value // Obtém o valor do cookie 'token'
        } else {
          // Ambiente de cliente - usa cookies-next para buscar o token
          token = getCookie('token') as string | undefined
        }

        // Se o token existir, define o cabeçalho de autorização
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
  },
})
