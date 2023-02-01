import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending'
}

const store = {

  todos: [
    new Todo('Piedra del amor'),
    new Todo('Piedra del dinero'),
    new Todo('Piedra del paraco'),
  ],
  filter: Filters.All,
}

const initStore = () => {
  console.log('Inicializando 🥑');
  console.log( store );
}

export default {
  initStore,
}