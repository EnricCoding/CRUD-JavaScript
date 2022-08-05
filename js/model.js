export default class Model {
  constructor() {
    this.view = null
    //Un array que nos simulara de BD
    this.todos = JSON.parse(localStorage.getItem('todos'));
    if (!this.todos || this.todos.length < 1){
      this.todos = [{
        id: 0,
        title: 'Ejemplo',
        description: 'Value ejemplo',
        completed: false
      }]
    this.currentID = 1
    }
    else{
      this.currentID = this.todos[this.todos.length - 1].id +1
    }
  }
 
  
//ASIGNAR VISTA
  setView(view){
    this.view = view;
  }




// OBTENER TODOS LOS TO DO. DIGAMOS QUE EL MODELO ES DONDE 
// SE ALMACEN LAS FUNCIONES COMO SI FUESE UN BD DE FUUNCIONES
  getTodos(){
    return this.todos;
  }

  toggleCompleted(id){
    console.log('id', id)
    const index = this.todos.findIndex( x => x.id ===  id);
    const todo = this.todos[index]
    //this.todos[index].completed = !this.todos[index].completed
    todo.completed = !todo.completed
    this.saveLocalStorage()

  }

  saveLocalStorage(){
    console.log('this', this.todos)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  addTodo(title, description){
    //Hemos creado un objeto donde le hemos especificado atributos
    // Un diccionario clave -> valor
    // todo -> es un model con valores
    const todo = {
      id: this.currentID++,
      title:title,
      description: description,
      completed: false
    }
    
    console.log(todo)
    this.todos.push(todo)
    console.log( 'hey',this.todos)
    this.saveLocalStorage()

    //PARA RETORNAR UN CLON DE NUESTRO OBJETO A.k.A MODELO CREMAMOS UN OBJETO
    return {...todo}

  }

  getTodos(){
    return this.todos.map((todo) => ({...todo}));
  }

  removeRow(id){
    const index = this.todos.findIndex( x => x.id ===  id);
    console.log('encontrado', this.todos[index])
    this.todos.splice(index, 1)
    console.log('eliminado',this.todos)
    this.saveLocalStorage()

  

  }

  editIt(id, newValues){
    console.log(id, newValues)
   
    const index = this.todos.findIndex( x => x.id ===  id);
    Object.assign(this.todos[index], newValues)
    this.saveLocalStorage()
    //console.log('index', index)
    const row = document.getElementById(id)
    row.children[0].innerText = newValues.title;
    row.children[1].innerText = newValues.description;
    row.children[2].children[0].checked = newValues.completed;
  }

}





































//export default class Model {
//  constructor() {
//    this.view = null;
//    this.todos = JSON.parse(localStorage.getItem('todos'));
//    if (!this.todos || this.todos.length < 1) {
//      this.todos = [
//        {
//          id: 0,
//          title: 'Learn JS',
//          description: 'Watch JS Tutorials',
//          completed: false,
//        }
//      ]
//      this.currentId = 1;
//    } else {
//      this.currentId = this.todos[this.todos.length - 1].id + 1;
//    }
//  }//

//  setView(view) {
//    this.view = view;
//  }//

//  save() {
//    localStorage.setItem('todos', JSON.stringify(this.todos));
//  }//

//  getTodos() {
//    return this.todos.map((todo) => ({...todo}));
//  }//

//  findTodo(id) {
//    return this.todos.findIndex((todo) => todo.id === id);
//  }//

//  toggleCompleted(id) {
//    const index = this.findTodo(id);
//    const todo = this.todos[index];
//    todo.completed = !todo.completed;
//    this.save();
//  }//

//  editTodo(id, values) {
//    const index = this.findTodo(id);
//    Object.assign(this.todos[index], values);
//    this.save();
//  }//

//  addTodo(title, description) {
//    const todo = {
//      id: this.currentId++,
//      title,
//      description,
//      completed: false,
//    }//

//    this.todos.push(todo);
//    console.log(this.todos);
//    this.save();//

//    return {...todo};
//  }//

//  removeTodo(id) {
//    const index = this.findTodo(id);
//    this.todos.splice(index, 1);  
//    this.save();
//  }
//}//
