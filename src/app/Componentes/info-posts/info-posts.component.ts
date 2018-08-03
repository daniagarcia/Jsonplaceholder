import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Posts } from '../../modules/Posts';

@Component({
  selector: 'app-info-posts',
  templateUrl: './info-posts.component.html',
  styleUrls: ['./info-posts.component.css']
})
export class InfoPostsComponent implements OnInit {
  postsarray:Array<Posts>;
  numpost:number;
  constructor(private ruta:ActivatedRoute, private http:Http) { 
    this.ruta.params.subscribe(params => this.numpost = params["id"]); 
    this.http.get('https://jsonplaceholder.typicode.com/posts/'+this.numpost+'/comments').subscribe(resp => this.postsarray = resp.json());

  }

  ngOnInit() {
  }

}
