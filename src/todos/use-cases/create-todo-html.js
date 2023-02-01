
/**
 * Función que se encarga de insertar un todo en un elemento HTML
 * @param {Todo} todo Objeto todo
 * @returns {HTMLLiElement}
 */
export const createTodoHTML = ( todo ) => {
  if ( !todo ) throw 'A Todo object is required';

  const { id, description, done } = todo;
  
  const html = ` 
    <div class="view">
      <input class="toggle" type="checkbox" checked>
      <label>${ description }</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`;

  
  const liElement = document.createElement('li');
  liElement.innerHTML = html; 
  if ( todo.done ) liElement.classList.add( 'completed' );
  liElement.setAttribute('data-id', id);
  
  return liElement;
}