import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./register-edit/main/app-routing.module";
import {RegisterEditModule} from "./register-edit/register-edit.module";
import {HttpClient} from "@angular/common/http";
import { LoaderComponent } from './core/loader/loader.component';
import {ParamGuardActivate} from "./shared/guard/edit-guard.active";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RegisterEditModule,
  ],
  providers: [ParamGuardActivate],
  bootstrap: [AppComponent]
})
export class AppModule {
}
