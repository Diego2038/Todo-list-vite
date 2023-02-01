(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const v=`<section class="todoapp">\r
  <header class="header">\r
      <h1>Tareas</h1>\r
      <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
  </header>\r
  \r
  <!-- This section should be hidden by default and shown when there are todos -->\r
  <section class="main">\r
      <input id="toggle-all" class="toggle-all" type="checkbox">\r
      <label for="toggle-all">Mark all as complete</label>\r
      <ul class="todo-list">\r
          <!-- These are here just to show the structure of the list items -->\r
          <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
          <!-- <li class="completed" data-id="abc">\r
              <div class="view">\r
                  <input class="toggle" type="checkbox" checked>\r
                  <label>Probar JavaScript</label>\r
                  <button class="destroy"></button>\r
              </div>\r
              <input class="edit" value="Create a TodoMVC template">\r
          </li> -->\r
          <!-- <li>\r
              <div class="view">\r
                  <input class="toggle" type="checkbox">\r
                  <label>Comprar un unicornio</label>\r
                  <button class="destroy"></button>\r
              </div>\r
              <input class="edit" value="Rule the web">\r
          </li> -->\r
      </ul>\r
  </section>\r
\r
  <!-- This footer should hidden by default and shown when there are todos -->\r
  <footer class="footer">\r
      <!-- This should be "0 items left" by default -->\r
      <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
      <!-- Remove this if you don't implement routing -->\r
      <ul class="filters">\r
          <li>\r
              <a id="opcTodos" class="selected filtro" class="selected" href="#/">Todos</a>\r
          </li>\r
          <li>\r
              <a id="opcPendientes" class="filtro" href="#/active">Pendientes</a>\r
          </li>\r
          <li>\r
              <a id="opcCompletados" class="filtro" href="#/completed">Completados</a>\r
          </li>\r
      </ul>\r
      <!-- Hidden if no completed items are left ↓ -->\r
      <button class="clear-completed">Borrar completados</button>\r
  </footer>\r
</section>\r
\r
\r
<footer class="info">\r
  <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
  <!-- Change this out with your name and url ↓ -->\r
  <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
  <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let f;const L=new Uint8Array(16);function C(){if(!f&&(f=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!f))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(L)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function S(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:E};function k(e,t,i){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const d=e.random||(e.rng||C)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=d[o];return t}return S(d)}class A{constructor(t){this.id=k(),this.description=t,this.done=!1,this.createdAt=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},s={todos:[],filter:a.All},P=()=>{console.log("Inicializando 🥑"),console.log(s),T()},T=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.filter=t},g=()=>{localStorage.setItem("state",JSON.stringify(s))},I=(e=a.All)=>{switch(e){case a.All:return[...s.todos];case a.Completed:return s.todos.filter(t=>t.done);case a.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},F=e=>{if(!e)throw new Error("Description is required");s.todos.push(new A(e)),g()},U=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),g()},q=e=>{s.todos=s.todos.filter(t=>t.id!==e),g()},x=()=>{s.todos=s.todos.filter(e=>!e.done),g()},M=(e=a.All)=>{s.filter=e,g()},D=()=>s.filter,c={addTodo:F,deleteCompleted:x,deleteTodo:q,getCurrentFilter:D,getTodos:I,initStore:P,loadStore:T,setFilter:M,toggleTodo:U};let h;const H=(e,t=[])=>{if(h||(h=document.querySelector(e)),!h)throw new Error(`Element ${e} not found`);h.innerHTML="",t.forEach(i=>{h.append(O(i))})},O=e=>{if(!e)throw"A Todo object is required";const{id:t,description:i,done:d}=e,o=` 
    <div class="view">
      <input class="toggle" type="checkbox" ${e.done?"checked":""}>
      <label>${i}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`,n=document.createElement("li");return n.innerHTML=o,e.done&&n.classList.add("completed"),n.setAttribute("data-id",t),n};let y;const V=e=>{if(y||(y=document.querySelector(e)),!y)throw new Error(`El elemento ${e} no se ha encontrado`);y.innerHTML=c.getTodos(a.Pending).length},p={TodoList:".todo-list",TodoInput:"#new-todo-input",ClearCompleted:".clear-completed",botonesFiltro:".filtro",cantidadPendientes:"#pending-count"},N=e=>{const t=()=>{const l=c.getTodos(c.getCurrentFilter());H(p.TodoList,l),i()},i=()=>{V(p.cantidadPendientes)};(()=>{const l=document.createElement("div");l.innerHTML=v,document.querySelector(e).append(l),t()})();const d=document.querySelector(p.TodoInput),o=document.querySelector(p.TodoList),n=document.querySelector(p.ClearCompleted),u=document.querySelectorAll(p.botonesFiltro);d.addEventListener("keyup",l=>{l.keyCode===13&&l.target.value.trim().length!==0&&(c.addTodo(l.target.value.trim()),l.target.value="",t())}),o.addEventListener("click",l=>{const m=l.target.closest("[data-id]");l.target.classList.contains("destroy")?c.deleteTodo(m.getAttribute("data-id")):c.toggleTodo(m.getAttribute("data-id")),t()}),n.addEventListener("click",l=>{c.deleteCompleted(),t()}),u.forEach(l=>{l.addEventListener("click",m=>{switch(u.forEach(w=>w.classList.remove("selected")),m.target.classList.add("selected"),m.target.id){case"opcTodos":c.setFilter(a.All);break;case"opcPendientes":c.setFilter(a.Pending);break;case"opcCompletados":c.setFilter(a.Completed);break;default:throw new Error("Error - set Filter not valided")}t()})})};console.log("Hola mundo");c.initStore();N("#app");
