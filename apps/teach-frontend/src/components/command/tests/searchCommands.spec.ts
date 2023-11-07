import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { useSearchCommands } from '../searchCommands'
import { useCommand } from '@/composables/command'

// vi.mock('../../../composables/command/index.ts')

describe('search commands', () => {
  beforeEach(() => {
    const { resetSearchCommands } = useSearchCommands()
    resetSearchCommands()
    // vi.mocked(useCommand).mockImplementation(() => {
    //   return {
    //     commands: [
    //       {
    //         name: 'test command',
    //         execute: () => {},
    //       },
    //     ],
    //   }
    // })
  })

  beforeAll(() => {
    const { addCommand } = useCommand()

    addCommand({
      name: '返回主页',
      execute: () => {},
    })

    addCommand({
      name: '切换皮肤',
      execute: () => {},
    })
  })

  it('should search command when input', () => {
    const { searchCommands, filteredCommands } = useSearchCommands()

    searchCommands('主页')

    expect(filteredCommands.value.length).toBe(1)
    expect(filteredCommands.value[0].name).toBe('返回主页')
  })

  it('should be reset when input is empty', () => {
    const { searchCommands, filteredCommands } = useSearchCommands()

    searchCommands('')

    expect(filteredCommands.value.length).toBe(2)
  })
})
