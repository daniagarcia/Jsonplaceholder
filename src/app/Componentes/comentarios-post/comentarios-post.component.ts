import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Comments } from '../../modules/Comments';

@Component({
  selector: 'app-comentarios-post',
  templateUrl: './comentarios-post.component.html',
  styleUrls: ['./comentarios-post.component.css']
})
export class ComentariosPostComponent implements OnInit {
  PostsComments:Array<Comments>;
  idposts:number;
  constructor(private ruta:ActivatedRoute, private http:Http) { 
    this.ruta.params.subscribe(params => this.idposts = params["id"]); 
    this.http.get('https://jsonplaceholder.typicode.com/posts/'+this.idposts+'/comments').subscribe(resp => this.PostsComments = resp.json());
  }

  ngOnInit() {
  }

}
