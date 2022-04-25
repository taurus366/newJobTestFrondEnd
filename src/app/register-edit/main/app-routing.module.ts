import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {EditComponent} from "../edit/edit.component";
import {RegisterComponent} from "../register/register.component";
import {ParamGuardActivate} from "../../shared/guard/edit-guard.active";


const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'edit',
    component: EditComponent,
    canActivate:[ParamGuardActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureUrl: "/register"
    }
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});
