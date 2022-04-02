import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "./services/usuario.service"

@Injectable()
class CheckLogged2 implements CanActivate {
    constructor(
        private router: Router,
        private usuarios: UsuarioService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {


        let username = localStorage.getItem('NOME')
        let password = localStorage.getItem('PASSWORD')
        let adm = localStorage.getItem('ADM')
            if (username && password && adm == "false") {
                return true
            } else {
                alert("É necessário um login válido!")
                this.router.navigate([""]);
                return false;
            }
        
    }
}

export default CheckLogged2;