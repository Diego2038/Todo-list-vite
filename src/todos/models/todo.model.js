import {v4 as uuid} from 'uuid'
export class Todo {


  /**
   * Constructor para crear un Todo
   * @param {String} description Descripción
   */
  constructor( description ){
    this.id = uuid(); 
    this.description = description; 
    this.done = false; 
    this.createdAt = new Date();
  }

}