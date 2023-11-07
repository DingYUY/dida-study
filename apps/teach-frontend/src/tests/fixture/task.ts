import { TaskStatus } from '@/store'

export const tasks = [
  {
    id: '0',
    title: '吃饭',
    status: TaskStatus.ACTIVE,
    content: '今天吃什么',
    projectId: '1',
    position: 1,
  },
  {
    id: '1',
    title: '学习',
    status: TaskStatus.COMPLETED,
    content: '今天学习了吗',
    projectId: '1',
    position: 2,
  },
]
