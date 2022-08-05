import Alert from './alert.js'

export default class addTodo { //generamos la clase addTodo
  constructor() {
    this.btn = document.getElementById('add');
    this.title = document.getElementById('title');
    this.description = document.getElementById('description');
    this.alert = new Alert('alert')

    //definimos los id
  }

  //En vez de meterle el (click) al html para que llame a la funciona, creamos
  //una function que apunte al evento "add" que es el id del boton
  onClick(callback) {
    console.log('hola')
    this.btn.onclick = () => {
      if (title.value === ' ' || description.value === '' ){
       // const alert = document.getElementById('alert');
       // alert.classList.remove('d-none')
       // alert.innerText = ('The fields are empty')
      this.alert.show('The fields are empty');
      return
      }
      else{
        this.alert.hide();
        console.log('title', this.title)
        console.log('title', this.description)
        callback(this.title.value, this.description.value);
      }

    }

  }
}



































//import Alert from './alert.js';//

//export default class AddTodo {
//  constructor() {
//    this.btn = document.getElementById('add');
//    this.title = document.getElementById('title');
//    this.description = document.getElementById('description');//

//    this.alert = new Alert('alert');
//  }//

//  onClick(callback) {
//    this.btn.onclick = () => {
//      if (title.value === '' || description.value === '') {
//        this.alert.show('Title and description are required');
//      } else {
//        this.alert.hide();
//        callback(this.title.value, this.description.value);
//      }
//    }
//  }
//}
