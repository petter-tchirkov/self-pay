export const useAuthStore = defineStore('auth', () => {
  const localePath = useLocalePath()
  const router = useRouter()
  const url = useRuntimeConfig().public.apiURL

  const token = useCookie<string | null>('access_token', {
    default: () => null,
    watch: true,
    maxAge: 1800
  })

  const login = async (email: string, password: string) => {
    await $fetch(`${url}/Users/get-token`, {
      method: 'POST',
      body: { email, password },
      onResponse({ response }) {
        if (response.status === 200) {
          token.value = response._data.token
          router.push(localePath('/profile'))
        }
      }
    })
  }

  const register = async (email: string, password: string) => {
    await $fetch(`${url}/Users`, {
      method: 'POST',
      body: { email, password },
      onResponse({ response }) {
        if (response.status === 201) {
          login(email, password)
        }
      }
    })
  }

  const logout = () => {
    token.value = null
    router.push(localePath('/'))
  }

  return { token, login, register, logout }
})
