import { describe, expect, it } from 'vitest'
import { useGoto } from './theHeader'
import { useSetup } from '@/tests/helper'

describe('test the header', () => {
  it('should go to home page', () => {
    const { router } = useSetup(() => {
      const { goToHome } = useGoto()

      goToHome()
    })

    expect(router.push).toHaveBeenCalledWith({ name: 'Home' })
  })
  it('should go to setting page', () => {
    const { router } = useSetup(() => {
      const { goToSettings } = useGoto()

      goToSettings()
    })

    expect(router.push).toHaveBeenCalledWith({ name: 'Settings' })
  })
})
