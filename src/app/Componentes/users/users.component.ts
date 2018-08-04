import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../modules/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
 Users:Array<Users>;
  
  

  constructor(protected route:ActivatedRoute, private http:Http) { 

    this.route.params.subscribe(params =>{
      
    })
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => this.Users=res.json());
   
    
    

  }

  ngOnInit() {
  }

}
