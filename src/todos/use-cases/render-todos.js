import { createTodoHTML } from "./";
/**
 * Función que se encarga de renderizar los todos.
 * @param {String} elementId Id del elemento HTML donde se quiere insertar los todos
 * @param {Todos} todos Arreglo de todos donde se encuentra los elementos que se quieren renderizar.
 */
export const renderTodos = ( elementId, todos = []) => {
  // TODO: Hacer referencia
  const element = document.querySelector( elementId );

  todos.forEach( todo => {
    element.append(createTodoHTML( todo ))
  });
}