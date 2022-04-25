import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import {AppRoutingModule} from "./main/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SelectorComponent } from './selector/selector.component';
import {ParamGuardActivate} from "../shared/guard/edit-guard.active";

@NgModule({
  declarations: [
    RegisterComponent,
    MainComponent,
    EditComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class RegisterEditModule { }
