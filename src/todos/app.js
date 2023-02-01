import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs = {
  TodoList: '.todo-list',
  TodoInput: '#new-todo-input',
  ClearCompleted: '.clear-completed',
  botonesFiltro: '.filtro',
  cantidadPendientes: '#pending-count',
}



/**
 * Función que se encarga de insertar el contenido HTML en un div del index.html
 * @param {String} elementId Elemento identificador para insertar el contenido en el html 
 */
export const App = ( elementId ) => { 

  const displayTodos = () => {
    const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
    renderTodos( ElementIDs.TodoList, todos ); 
    document.querySelector( ElementIDs.cantidadPendientes ).innerHTML = todoStore.getTodosPendings();
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
  const clearCompleted = document.querySelector( ElementIDs.ClearCompleted );
  const elementsFiltroLI = document.querySelectorAll( ElementIDs.botonesFiltro );

  // funcs

  const quitarFiltros = () => {
    opcTodos.classList.remove('selected');
    opcPendientes.classList.remove('selected');
    opcCompletados.classList.remove('selected');
  }

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

  clearCompleted.addEventListener( 'click', ( event ) => {
    todoStore.deleteCompleted();
    displayTodos();
  })

  elementsFiltroLI.forEach( element =>  {

    element.addEventListener( 'click', ( element ) => {
      elementsFiltroLI.forEach( el => el.classList.remove('selected'));
      element.target.classList.add('selected');
      // console.log( element.target.id )
      switch ( element.target.id) {
        case 'opcTodos':
          todoStore.setFilter( Filters.All );
          break;
        case 'opcPendientes':
          todoStore.setFilter( Filters.Pending );
          break;
        case 'opcCompletados':
          todoStore.setFilter( Filters.Completed );
          break;
        default:
          throw new Error('Error - set Filter not valided');
      }
      displayTodos();
    })
  })


}