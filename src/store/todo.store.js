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

const loadStore = () => {
  throw new Error('No implementado aún');
} 

/**
 * Función que crea un nuevo Todo
 * @param {String} description Descripción del Todo
 */
const addTodo = ( description ) => {
  throw new Error('No implementado aún');
}

/**
 * Función que se encarga de cambiar el estado de completado de un Todo
 * @param {String} todoId Id del Todo
 */
const toggleTodo = ( todoId) => {
  throw new Error('No implementado aún');
}

const deleteTodo = ( todoId ) => {
  throw new Error('No implementado aún');
}

const deleteCompleted = () => {
  throw new Error('No implementado aún');
}

const setFilter = ( newFilter = Filters.All ) => {
  throw new Error('No implementado aún');
}

const getCurrentFilter = () => {
  throw new Error('No implementado aún');
}


export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
}