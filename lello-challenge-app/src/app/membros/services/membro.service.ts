import { Membro } from './../models/membro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class MembroService extends BaseService {

  constructor(private http: HttpClient) { super()}

  obterTodos(): Observable<Membro[]> {
    return this.http
        .get<Membro[]>(this.UrlServiceV1 + "orgs/angular/public_members")
        .pipe(catchError(super.serviceError));
  }

  obterPorLogin(login: string): Observable<Membro> {
    return this.http
        .get<Membro>(this.UrlServiceV1 + "users/" + login)
        .pipe(catchError(super.serviceError));
  }

  obterSeguidoresPorLogin(login: string): Observable<Membro[]> {
    return this.http
        .get<Membro[]>(this.UrlServiceV1 + "users/" + login +"/followers")
        .pipe(catchError(super.serviceError));
  }

  obterRepositoriosPorLogin(login: string): Observable<Membro[]> {
    return this.http
        .get<Membro[]>(this.UrlServiceV1 + "users/" + login +"/repos")
        .pipe(catchError(super.serviceError));
  }


}
