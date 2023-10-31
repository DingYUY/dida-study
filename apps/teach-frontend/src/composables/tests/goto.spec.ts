import { describe, expect, it, vi } from 'vitest'
import { GITHUB_URL, goToGithub, useGoto } from '../goto'
import { useSetup } from '@/tests/helper'
import { RouteNames } from '@/router/const'

describe('test the header', () => {
  it('should go to home page', () => {
    const { router } = useSetup(() => {
      const { goToHome } = useGoto()

      goToHome()
    })

    expect(router.push).toHaveBeenCalledWith({ name: RouteNames.Home })
  })
  it('should go to setting page', () => {
    const { router } = useSetup(() => {
      const { goToSettings } = useGoto()

      goToSettings()
    })

    expect(router.push).toHaveBeenCalledWith({ name: RouteNames.Settings })
  })
  it('should open github page', () => {
    window.open = vi.fn()

    goToGithub()

    expect(window.open).toHaveBeenCalledWith(GITHUB_URL)
  })
})
