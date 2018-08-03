import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
   //id:number;
   //username:string;
   //email:string;
  // Users:Array<UsersComponent>;
  //private http:Http
   
  

  constructor() { 
    //this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(resp => this.Users =resp.json() )
    
    

  }

  ngOnInit() {
  }

}
