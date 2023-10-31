import { mount } from '@vue/test-utils'
export function useSetup<V>(setup: () => V) {
  const cpn = {
    render() {},
    setup,
  }

  const wrapper = mount(cpn)

  return {
    wrapper,
    router: wrapper.router,
  }
}
