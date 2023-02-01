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

  const input = document.querySelector( ElementIDs.TodoInput );

  input.addEventListener('keyup', ( event ) => {
    if ( event.keyCode !== 13) return; // Debe presionar enter
    if ( event.target.value.trim().length === 0) return;  

    todoStore.addTodo( event.target.value.trim() );
    displayTodos();
  })

}