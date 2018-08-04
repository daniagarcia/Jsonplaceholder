import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Posts } from '../../modules/Posts';

@Component({
  selector: 'app-posts-users',
  templateUrl: './posts-users.component.html',
  styleUrls: ['./posts-users.component.css']
})
export class PostsUsersComponent implements OnInit {
  postUsers:Array<Posts>;
  iduser:number;

  constructor(private ruta:ActivatedRoute, private http:Http) { 

    this.ruta.params.subscribe(params => this.iduser = params["id"]); 
    this.http.get('https://jsonplaceholder.typicode.com/users/'+this.iduser+'/posts').subscribe(resp => this.postUsers = resp.json());
  }

  ngOnInit() {
  }

}
