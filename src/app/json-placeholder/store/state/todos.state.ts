import { Todo } from '../../models/todo';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  failure?: string | undefined;
}

export const initialTodoState: TodoState = {
  todos: [],
  loading: false,
  failure: undefined,
};
