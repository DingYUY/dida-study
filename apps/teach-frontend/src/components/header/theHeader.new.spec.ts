import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  VueRouterMock,
  createRouterMock,
  injectRouterMock,
} from 'vue-router-mock'
import { config, mount } from '@vue/test-utils'
import { useGoto } from './theHeader'

const router = createRouterMock({
  spy: {
    create: fn => vi.fn(fn),
    reset: spy => spy.mockClear(),
  },
})

config.plugins.VueWrapper.install(VueRouterMock)

describe('test the header', () => {
  beforeEach(() => {
    injectRouterMock(router)
    router.reset()
  })
  it('should go to home page', () => {
    const cpn = {
      render() {},
      setup() {
        const { goToHome } = useGoto()

        goToHome()
      },
    }

    const wrapper = mount(cpn)

    expect(wrapper.router.push).toHaveBeenCalledWith({ name: 'Home' })
  })
  it('should go to setting page', () => {
    const cpn = {
      render() {},
      setup() {
        const { goToSettings } = useGoto()

        goToSettings()
      },
    }

    const wrapper = mount(cpn)

    expect(wrapper.router.push).toHaveBeenCalledWith({ name: 'Settings' })
  })
})
