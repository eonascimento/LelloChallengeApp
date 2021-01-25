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
        .get<Membro[]>(this.UrlServiceV1)
        .pipe(catchError(super.serviceError));
  }
}
