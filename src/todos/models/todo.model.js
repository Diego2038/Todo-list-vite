export class Todo {


  /**
   * Constructor para crear un Todo
   * @param {String} description Descripción
   */
  constructor( description ){
    this.id = 1; 
    this.description = description; 
    this.done = false; 
    this.createdAt = new Date();
  }

}