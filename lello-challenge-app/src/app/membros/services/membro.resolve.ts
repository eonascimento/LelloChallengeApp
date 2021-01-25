import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Membro } from "../models/membro.model";
import { MembroService } from "./membro.service";

@Injectable()
export class MembroResolve implements Resolve<Membro> {

    constructor(private membroService: MembroService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.membroService.obterPorLogin(route.params['login']);
    }
}
