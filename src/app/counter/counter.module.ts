import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations : [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}


/* Objetivo de los modulos es que este encapsulado y protegido del mundo exterior */
