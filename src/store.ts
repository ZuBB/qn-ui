import { create } from 'zustand'
import { AllTodos } from './interfaces'

export interface TodoState {
  loading: boolean,
  todos: AllTodos

  setLoading: (value: boolean) => void
  setTodos: (newTodos: AllTodos) => void,
}

export const useTodoStore = create<TodoState>()((set) => ({
  loading: false,
  todos: {
    latestModified: '',
    incompleted: [],
    completed: []
  },

  setLoading: (value: boolean) => set((state) => ({ ...state, loading: value })),
  setTodos: (newTodos: AllTodos) => set((state) => ({ ...state, todos: newTodos }))
}))