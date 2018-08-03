import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Posts } from '../../modules/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  Posts:Array<Posts>;

  constructor(protected route:ActivatedRoute, private http:Http) {
    this.route.params.subscribe(params =>{
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => this.Posts=res.json());
    })
   }

  ngOnInit() {
  }

}
