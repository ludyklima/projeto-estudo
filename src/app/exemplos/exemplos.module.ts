import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CompartilhadoModule} from './../compartilhado/compartilhado.module'
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { PipesComponent } from './pipes/pipes.component';
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    DiretivasComponent,
    PipesComponent,
    CriacaoPipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExemplosRoutingModule,
    CompartilhadoModule
  ],
  exports: [
    DataBindingComponent
  ]
})
export class ExemplosModule { }
