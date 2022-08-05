export default class Filters {
  constructor() {
    this.form = document.getElementById('filters');
    this.btn = document.getElementById('search');
  }

  onClick(callback) {
    console.log('aqui')
    this.btn.onclick = (event) => {
      event.preventDefault(); //para que no haga refresh
      const data = new FormData(this.form); //obtener la informacion
      callback({
        type: data.get('type'),  //tipo de dato, obtenemos la info via el name
        words: data.get('words'), //las palabras
      });
    }
  }
}
