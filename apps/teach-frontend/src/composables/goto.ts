import { useRouter } from 'vue-router'
import { RouteNames } from '@/router/const'

export function useGoto() {
  const router = useRouter()

  function goToHome() {
    router.push({
      name: RouteNames.Home,
    })
  }

  function goToSettings() {
    router.push({
      name: RouteNames.Settings,
    })
  }

  return {
    goToHome,
    goToSettings,
    goToGithub,
  }
}

export const GITHUB_URL = 'https://github.com/cuixueshe/dida'
export function goToGithub() {
  window.open(GITHUB_URL)
}
