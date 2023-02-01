import './style.css';
import { App } from './src/todos/app'; 
import todoStore from './src/store/todo.store';

console.log('Hola mundo');

todoStore.initStore();
App('#app');
