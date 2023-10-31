import { beforeEach, vi } from 'vitest'
import {
  VueRouterMock,
  createRouterMock,
  injectRouterMock,
} from 'vue-router-mock'
import { config } from '@vue/test-utils'

function setupRouterMock() {
  const router = createRouterMock({
    spy: {
      create: fn => vi.fn(fn),
      reset: spy => spy.mockClear(),
    },
  })

  beforeEach(() => {
    injectRouterMock(router)
    router.reset()
  })

  config.plugins.VueWrapper.install(VueRouterMock)
}

setupRouterMock()
