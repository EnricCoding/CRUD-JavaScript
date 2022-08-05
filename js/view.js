
import Modal from './components/modal.js';
import Filters from './components/filters.js';
import addTodo from './components/add-todo.js';


export default class View {
  
  constructor(){
    this.model = null;
    this.table = document.getElementById('table');
    const btn = document.getElementById('add');
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    //Le decimos que el componente nuevo fuera de aqui controle el codigo
    this.addTodoForm = new addTodo();
    this.addTodoForm.onClick((title, description) => this.addTodo(title, description)) //una funcion que llama a otra funcion
    this.modal = new Modal();
    this.modal.onClick((id, newValues) => this.editTodo(id, newValues) )
    this.filters = new Filters(); 
    this.filters.onClick((filters) => this.searchFilters(filters) )
    //que devuelva lo del callback y se lo pasas a la funcion

   
  }

//MANEJAR TABLA
  setModel(model){
    this.model = model;
  }

  searchFilters(filters){
    const { type, words} = filters
    console.log('FUNCIONA', type, words)
    const [_, ...rows] = this.table.getElementsByTagName('tr'); //quitar el elemento cabezera
    for (const row of rows){
      const [title, description, completed] = row.children; //se ordenan a partir de la posición
      let hide = false
      console.log('row', row)

      if (words){
        hide = !title.innerText.includes(words) && !description.innerText.includes(words);
        console.log('filters', hide)
      }

      const shouldBeCompleted = type === 'completed';
      const isCompleted = completed.children[0].checked;

      if (type !== 'all' && shouldBeCompleted !== isCompleted){
        hide = true
        console.log('show', hide)
      }

      if (hide) {
        row.classList.add('d-none')
      }
      else {
        row.classList.remove('d-none')
      }


    }
   

  }
  //le añadimos titulo y descripcion. 

  addTodo(title, description) {
    console.log('the last one',)
    //LLamo a la function de model.js
    document.getElementById('title').value = ''
    document.getElementById('description').value = ''

    const todo = this.model.addTodo(title, description);
    this.createRow(todo)
  }


  removeRow(id){
    this.model.removeRow(id)
    document.getElementById(id).remove();
 
  }


  editTodo(id, newValues){
    console.log('edit', id , newValues)
    this.model.editIt(id, newValues)

  }
  

  createRow(todo){
    console.log('aqio?')
    //agregamos en la vista la row mediante javascript
  const row = this.table.insertRow();
  row.setAttribute('id', todo.id)
  
  row.innerHTML = `
  <td>${todo.title} </td>
  <td>${todo.description} </td>
  <td class="text-center">
    
  </td>
    <td class="text-right">

    </td>
  `;

//   <button class="btn btn-primary mb-1">
//   <i class="fa fa-pencil"> </i>
// </button>

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed //al ser un booleano ya nos lo marcara como true  false
  checkbox.onclick = () => this.model.toggleCompleted(todo.id)
  row.children[2].appendChild(checkbox); //le decimos el hueco de los td donde queremos que vaya - en mi caso en la posicion 2

  const editBtn = document.createElement('button');
  editBtn.classList.add('boton', 'btn-primary', 'mb-3');
  editBtn.innerHTML = '<i class="fa fa-pencil"> </i>';//
  editBtn.setAttribute('data-toggle', 'modal')
  editBtn.setAttribute('data-target', '#modal')
  editBtn.onclick = () => this.modal.setValues(todo);
  row.children[3].appendChild(editBtn); //le decimos el hueco de los td donde queremos que vaya - en mi caso en la posicion 2



  const removeBtn = document.createElement('button');
  removeBtn.classList.add('boton', 'btn-danger', 'mb-1');
  removeBtn.innerHTML = '<i class="fa fa-trash"> </i>';//
  removeBtn.onclick = () => this.removeRow(todo.id);


    
  
  row.children[3].appendChild(removeBtn);
  console.log('Tendrias que borrar fila')//

  }

  showModal(todo){
    console.log('info', todo)

  }

  showList(){
    const todos = this.model.getTodos();
    console.log('get', todos)
    todos.forEach((i) => this.createRow(i));
       // for (const i in todos){
   //   this.createRow(i)
   // }

  }


}








































//export default class View {
//  constructor() {
//    this.model = null;
//    this.table = document.getElementById('table');
//    this.addTodoForm = new AddTodo();
//    this.modal = new Modal();
//    this.filters = new Filters();
//    //

//    this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
//    this.modal.onClick((id, values) => this.editTodo(id, values));
//    this.filters.onClick((filters) => this.filter(filters));
//  }//

//  setModel(model) {
//    this.model = model;
//  }//

//  render() {
//    const todos = this.model.getTodos();
//    todos.forEach((todo) => this.createRow(todo));
//  }//

//  filter(filters) {
//    const { type, words } = filters;
//    const [, ...rows] = this.table.getElementsByTagName('tr');
//    for (const row of rows) {
//      const [title, description, completed] = row.children;
//      let shouldHide = false;//

//      if (words) {
//        shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words);
//      }//

//      const shouldBeCompleted = type === 'completed';
//      const isCompleted = completed.children[0].checked;//

//      if (type !== 'all' && shouldBeCompleted !== isCompleted) {
//        shouldHide = true;
//      }//

//      if (shouldHide) {
//        row.classList.add('d-none');
//      } else {
//        row.classList.remove('d-none');
//      }
//    }
//  }//

//  addTodo(title, description) {
//    const todo = this.model.addTodo(title, description);
//    this.createRow(todo);
//  }//

//  toggleCompleted(id) {
//    this.model.toggleCompleted(id);
//  }//

//  editTodo(id, values) {
//    this.model.editTodo(id, values);
//    const row = document.getElementById(id);
//    row.children[0].innerText = values.title;
//    row.children[1].innerText = values.description;
//    row.children[2].children[0].checked = values.completed;
//  }//

//  removeTodo(id) {
//    this.model.removeTodo(id);
//    document.getElementById(id).remove();
//  }//

//  createRow(todo) {
//    const row = table.insertRow();
//    row.setAttribute('id', todo.id);
//    row.innerHTML = `
//      <td>${todo.title}</td>
//      <td>${todo.description}</td>
//      <td class="text-center">//

//      </td>
//      <td class="text-right">//

//      </td>
//    `;//

//    const checkbox = document.createElement('input');
//    checkbox.type = 'checkbox';
//    checkbox.checked = todo.completed;
//    checkbox.onclick = () => this.toggleCompleted(todo.id);
//    row.children[2].appendChild(checkbox);//

//    const editBtn = document.createElement('button');
//    editBtn.classList.add('btn', 'btn-primary', 'mb-1');
//    editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
//    editBtn.setAttribute('data-toggle', 'modal');
//    editBtn.setAttribute('data-target', '#modal');
//    editBtn.onclick = () => this.modal.setValues({
//      id: todo.id,
//      title: row.children[0].innerText,
//      description: row.children[1].innerText,
//      completed: row.children[2].children[0].checked,
//    });
//    row.children[3].appendChild(editBtn);//

//    const removeBtn = document.createElement('button');
//    removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
//    removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
//    removeBtn.onclick = () => this.removeTodo(todo.id);
//    row.children[3].appendChild(removeBtn);
//  }
//}//
