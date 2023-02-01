
/**
 * Función que se encarga de insertar un todo en un elemento HTML
 * @param {Todo} todo Objeto todo
 * @returns {HTMLLiElement}
 */
export const createTodoHTML = ( todo ) => {
  if ( !todo ) throw 'A Todo object is required';
  
  const html = `<h1>${ todo.description }</h1>`;
  const liElement = document.createElement('li');
  liElement.innerHTML = html;
  return liElement;
}