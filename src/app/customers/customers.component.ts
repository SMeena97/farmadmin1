import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { MyInterface } from "../my-interface";
import { error } from 'util';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[ApiService]
})
export class CustomersComponent implements OnInit {

  title = 'app';

  _postsArray: MyInterface[];

  constructor(private apiSerivce: ApiService){}

  getPosts(): void {
    this.apiSerivce.getPosts().
    subscribe(
       resultArray => this._postsArray =
       resultArray,
       error => console.log("Error :: " + error ))
  }
  ngOnInit(): void{
    this.getPosts();

  }
}


