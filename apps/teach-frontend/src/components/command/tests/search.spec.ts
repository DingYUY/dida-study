import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useSearch } from '../search'

const searchTasks = vi.fn()
const resetSearchTasks = vi.fn()
vi.mock('../searchTasks.ts', () => {
  return {
    useSearchTasks() {
      return {
        searchTasks,
        resetSearchTasks,
      }
    },
  }
})

const searchCommands = vi.fn()
const resetSearchCommands = vi.fn()
vi.mock('../searchCommands.ts', () => {
  return {
    useSearchCommands() {
      return {
        searchCommands,
        resetSearchCommands,
      }
    },
  }
})

describe('test search', () => {
  beforeEach(async () => {
    vi.useFakeTimers()

    const { resetSearch } = useSearch()

    resetSearch()

    await vi.runAllTimersAsync()

    searchTasks.mockClear()
    searchCommands.mockClear()
    resetSearchTasks.mockClear()
    resetSearchCommands.mockClear()
  })

  it('should be loading is true when search start', async () => {
    const { search, loading } = useSearch()

    search.value = 'test'

    await vi.advanceTimersToNextTimerAsync()

    expect(loading.value).toBe(true)
  })

  it('should be loading is false when search complete', async () => {
    const { search, loading } = useSearch()

    search.value = 'test'

    await vi.runAllTimersAsync()

    expect(loading.value).toBe(false)
  })

  it('should be searching is true when search complete', async () => {
    const { search, searching } = useSearch()

    search.value = 'test'

    await vi.runAllTimersAsync()

    expect(searching.value).toBe(true)
  })
  it('search tasks', async () => {
    const { search } = useSearch()

    search.value = 'test'

    await vi.runAllTimersAsync()

    expect(searchTasks).toHaveBeenCalledWith('test')
  })
  it('search command', async () => {
    const { search } = useSearch()

    search.value = '>test'

    await vi.runAllTimersAsync()

    expect(searchCommands).toHaveBeenCalledWith('test')
  })
  it('search commands remove the trailing white space', async () => {
    const { search } = useSearch()

    search.value = '>test '

    await vi.runAllTimersAsync()

    expect(searchCommands).toHaveBeenCalledWith('test')
  })
  it('reset when input clear', async () => {
    const { search, loading, searching } = useSearch()

    search.value = 'test'

    await vi.runAllTimersAsync()

    search.value = ''

    await vi.runAllTimersAsync()

    expect(loading.value).toBe(false)
    expect(searching.value).toBe(false)
    expect(resetSearchCommands).toBeCalled()
    expect(resetSearchTasks).toBeCalled()
  })
})
