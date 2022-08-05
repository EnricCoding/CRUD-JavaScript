import Model from "./model.js";
import View from "./view.js";

//
document.addEventListener('DOMContentLoaded', () => { //el ngonit de javascript
  const model = new Model();
  const view = new View();
  model.setView(view);
  view.setModel(model);

  view.showList();

})




//// CON LAS IDS DE QUE CADA ELEMENTO GUARDAMOS EL VALOR
//document.addEventListener('DOMContentLoaded', function()  {
//const boton = document.getElementById('add');
//const title = document.getElementById('title');
//const description = document. getElementById('description');
//const table = document.getElementById('table');
//const alert = document.getElementById('alert');
//let id = 1;//
//

////CREAMOS UNA FUNCiÓN PARA CADA VEZ AÑADIMOS UNA FILTA AUTOMATICAMENTE 
////SE ASIGNA UNA ID Y AL DARLE AL BOTON DE RM ELIMINEMOS LA COLUMNA QUE QUEREMOS//

//function removeTodo(id) {
//  console.log(id);
//  document.getElementById(id).remove();
//}//
//

////AL DARLE EL BOTON
//function addValuess() {
//  
//  if (title.value === '' || description.value === '')
//  {
//    alert.classList.remove('d-none');
//    console.log("Hola")
//    return;
//  }
//  // si no 
//  alert.classList.add('d-none');
//  const row = table.insertRow();
//  row.setAttribute('id', id++)
//  row 
//  row.innerHTML = `
//  <td>${title.value} </td>
//  <td>${description.value} </td>//

//  <td class="text-center">
//    <input type="checkbox">
//  </td>
//  <td class="text-right">
//    <button class="btn btn-primary mb-1">
//      <i class="fa fa-pencil"> </i>
//    </button>
//    </td>
//  `;//

//  const removeBtn = document.createElement('button');
//  removeBtn.classList.add('boton', 'btn-danger', 'mb-1');
//  removeBtn.innerHTML = '<i class="fa fa-trash"> </i>';//

//  removeBtn.onclick = function (e) {
//    removeTodo(row.getAttribute('id'));
// //

//  }
//  row.children[3].appendChild(removeBtn);
//  console.log('Tendrias que borrar fila')//
//

//  }
//  boton.onclick = addValuess; //
//

//  //

//});//
//

