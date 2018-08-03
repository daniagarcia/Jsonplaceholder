import { Component, OnInit } from '@angular/core';
import { Users } from '../modules/Users';
import { Posts } from '../modules/Posts';
import { Http } from '@angular/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  Users: Array<Users>;
Posts: Array<Posts>;


constructor(private http: Http){

this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(resp => this.Users =resp.json());

this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(resp => this.Posts =resp.json());

}

 
  ngOnInit() {
  }

}
