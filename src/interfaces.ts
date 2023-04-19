export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export interface AllTodos {
  latestModified: string;
  incompleted: Todo[];
  completed: Todo[];
}

export interface BeError {
  message: string;
  statusCode: number;
}