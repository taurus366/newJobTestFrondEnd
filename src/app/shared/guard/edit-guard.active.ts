import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {SharedMethodsService} from "../shared-methods.service";

@Injectable()
export class ParamGuardActivate implements CanActivate {

  constructor(private router:Router , private sharedService:SharedMethodsService) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const {authenticationRequired , authenticationFailureRedirectUrl } = route.data;

    if (typeof authenticationRequired === 'boolean' && authenticationRequired && this.sharedService.getUser() != null || this.sharedService.getUser() != undefined) {
      return true;
    } else {
      return this.router.parseUrl(authenticationFailureRedirectUrl || '/');
    }

  }

}
