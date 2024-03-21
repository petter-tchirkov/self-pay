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
        token.value = response._data
        router.push(localePath('/profile'))
      }
    })
  }

  return { token, login }
})
