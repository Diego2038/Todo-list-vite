import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs = {
  TodoList: '.todo-list',
  TodoInput: '#new-todo-input'
}

/**
 * Función que se encarga de insertar el contenido HTML en un div del index.html
 * @param {String} elementId Elemento identificador para insertar el contenido en el html 
 */
export const App = ( elementId ) => {

  const displayTodos = () => {
    const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
    renderTodos( ElementIDs.TodoList, todos );
  }

  (() => {

    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector( elementId ).append( app );
    displayTodos();
  })();

  // Referencia HTML
  const input = document.querySelector( ElementIDs.TodoInput );
  const todoListUL = document.querySelector( ElementIDs.TodoList );

  // Listeners
  input.addEventListener('keyup', ( event ) => {
    if ( event.keyCode !== 13) return; // Debe presionar enter
    if ( event.target.value.trim().length === 0) return;  

    todoStore.addTodo( event.target.value.trim() );
    event.target.value = '';
    displayTodos();
  })

  todoListUL.addEventListener('click', ( event ) => {
    // NOTA: Puedes tener más de un addEventListener del mismo tipo
    const elemento = event.target.closest('[data-id]');
    if ( event.target.classList.contains('destroy')) {
      todoStore.deleteTodo( elemento.getAttribute('data-id'));
    } else { 
      todoStore.toggleTodo( elemento.getAttribute('data-id'));
    } 
    displayTodos();
  })

}