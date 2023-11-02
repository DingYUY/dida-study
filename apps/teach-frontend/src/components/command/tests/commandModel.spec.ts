import { beforeEach, describe, expect, it, vi } from 'vitest'
import { computed } from 'vue'
import * as useCommandModel from '../commandModal'
import { useSetup } from '@/tests/helper'
import * as misc from '@/composables/misc'

describe('test commandModal', () => {
  beforeEach(() => {
    const { closeCommandModal } = useCommandModel
    closeCommandModal()
  })
  it('should be open modal', () => {
    const { openCommandModal, showCommandModal } = useCommandModel

    openCommandModal()

    expect(showCommandModal.value).toBe(true)
  })
  it('should be close modal', () => {
    const { closeCommandModal, showCommandModal } = useCommandModel

    closeCommandModal()

    expect(showCommandModal.value).toBe(false)
  })
  it('should be open command model when press cmd+k on Mac', () => {
    vi.spyOn(misc, 'useIsMac').mockReturnValue(computed(() => true))

    const { registerKeyboardShortcut, showCommandModal } = useCommandModel

    const { wrapper } = useSetup(() => {
      registerKeyboardShortcut()
    })

    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'k',
        metaKey: true,
      }),
    )
    expect(showCommandModal.value).toBe(true)

    wrapper.unmount()
  })
  it('should be open command model when press ctrl+k on Win', () => {
    vi.spyOn(misc, 'useIsMac').mockReturnValue(computed(() => false))

    const { registerKeyboardShortcut, showCommandModal } = useCommandModel

    const { wrapper } = useSetup(() => {
      registerKeyboardShortcut()
    })

    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'k',
        ctrlKey: true,
      }),
    )

    expect(showCommandModal.value).toBe(true)

    wrapper.unmount()
  })
})
