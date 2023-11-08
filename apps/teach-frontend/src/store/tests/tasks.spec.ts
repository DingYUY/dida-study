// import { beforeEach, describe, expect, it, vi } from 'vitest'
// import { createPinia, setActivePinia } from 'pinia'
// import { TaskStatus, useTasksStore } from '../tasks'
// import { useTasksSelectorStore } from '../tasksSelector'
// import { completeSmartProject } from '../smartProjects'
// import { liveListProject } from '@/tests/fixture'
// import { fetchCreateTask } from '@/api'

// vi.mock('@/api')

// vi.mocked(fetchCreateTask).mockImplementation(async (title: string) => {
//   return {
//     title,
//     content: '这是一个内容',
//     status: TaskStatus.ACTIVE,
//     projectId: '1',
//     position: 1,
//     _id: '1',
//     createdAt: new Date().toString(),
//     updatedAt: new Date().toString(),
//   }
// })

// describe('tasks store', () => {
//   beforeEach(() => {
//     setActivePinia(createPinia())

//     vi.clearAllMocks()
//   })
//   describe('add task', () => {
//     it('should add task to the first position', async () => {
//       const tasksSelectorStore = useTasksSelectorStore()
//       tasksSelectorStore.currentSelector = liveListProject

//       const tasksStore = useTasksStore()
//       await tasksStore.addTask('运动')

//       const task = await tasksStore.addTask('吃饭')

//       expect(task?.title).toBe('吃饭')
//       expect(tasksStore.tasks[0]).toEqual(task)
//       expect(tasksStore.currentActiveTask).toEqual(task)
//       expect(fetchCreateTask).toBeCalledWith(task?.title, liveListProject.id)
//     })
//   })
// })
