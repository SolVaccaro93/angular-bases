import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter : {{counter}}</h3>

<button (click) ="increaseBy(1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click) ="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;

  }/* metodo */

  resetCounter() {
    this.counter = 10;
  }

}




/* import { Component } from "@angular/core";  /* seccion de angular */ /* Component decorador que transforma mi clase a componente */



//@Component ({
//selector: 'app-counter', /* como quiero llamar mi componente cuando creamos etiquetas personalizadas html */
//template: '<h1>Hola Counter</h1>'

//})
//esto es un objeto
//export class CounterComponent {

//}


//* la clase se transforma a componente cuando uso el decorador component */
//* el componente necesita ser parte de un modulo
