import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";


import {MyInterface} from "./my-interface";

@Injectable()
export class ApiService {

  private postsURL ="http://localhost:3000/customers";

  constructor(private http: Http ) {}
 getPosts(): Observable<MyInterface[]>{
    return this.http
     .get(this.postsURL)
     .pipe(map((response: Response)=> {
       return <MyInterface[]>response.json();
     }))
     
 }

 private handleError(error: Response) {
   return Observable.throw(error.statusText);
 }

}