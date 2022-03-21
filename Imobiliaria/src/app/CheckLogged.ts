import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
@Injectable()
class CheckLogged implements CanActivate{
    usuarios: any;
    constructor(
        private router: Router
    ){}
 
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        ): Observable<boolean> | Promise<boolean> | boolean {
 
            let username = localStorage.getItem('USER')
            let password = localStorage.getItem('PASS')
            if(username && password){
                return true;
            } else {
                alert("deu bosta mano")
                this.router.navigate(["/"]);
                return false;
            }
    }
}
 
export default CheckLogged;