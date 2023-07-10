import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase(); /* metodo de strings de JS */
  } //esta funcion va a devolver un string


  getHeroDescription(): string {
       return  ` ${this.name} - ${this.age}`;

  }  //buena practica especificar el valor de retorno, en este caso es un string

  changeHero():void{
    this.name = 'Spiderman';
  }

  changeAge():void{
      this.age = 25;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach( element => {
    //element.innerHTML='<h1> desde Angular <h1>
    //esto cambiar los h1, estas instrucciones estan fuera del ciclo de detecciond e angular
    // aunque tecnicamente no le estoy diciendo que cambie la propiedad
  }
}



/* getter (metodo de clase) -> manera de crearse una propiedad, setters */
/* this, son propiedades */



//meotdos se ven en violeta, y propiedades en celeste
