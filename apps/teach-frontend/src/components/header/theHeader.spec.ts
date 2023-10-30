import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useRouter } from 'vue-router'
import { useGoto } from './theHeader'

vi.mock('vue-router')

const pushFn = vi.fn()
vi.mocked(useRouter as () => { push: Function }).mockImplementation(() => {
  return {
    push: pushFn,
  }
})

beforeEach(() => {
  pushFn.mockClear()
})

describe('useGoto', () => {
  it('should go to home page', () => {
    const { goToHome } = useGoto()

    goToHome()

    expect(pushFn).toHaveBeenCalledWith({ name: 'Home' })
  })

  it('should go to setting page', () => {
    const { goToSettings } = useGoto()

    goToSettings()

    expect(pushFn).toHaveBeenCalledWith({ name: 'Settings' })
  })
})
