import todoStore, { Filters } from "../../store/todo.store";

let element;

export const renderPending = ( idElemento) => {
  if ( !element ) element = document.querySelector( idElemento );
  if ( !element ) throw new Error(`El elemento ${ idElemento } no se ha encontrado`);

  
  element.innerHTML = todoStore.getTodos( Filters.Pending ).length;

} 