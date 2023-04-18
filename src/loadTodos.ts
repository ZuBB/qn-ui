import axios from 'axios';
import { AllTodos } from './interfaces'

const addTodoUrl = '/api/todos'

export const loadTodos = async (): Promise<AllTodos> => {
  const urlParams = new URLSearchParams(window.location.search);
  const finalUrl = addTodoUrl + '?' + urlParams
  return (await axios.get(finalUrl)).data
}
