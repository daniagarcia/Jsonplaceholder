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
  _Posts:Array<Posts>;

  constructor(protected route:ActivatedRoute, private http:Http) {
    this.route.params.subscribe(params =>{
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => this._Posts=res.json());
    })
   }

  ngOnInit() {
    
  }

  AgregarPost(event){
    event.preventDefault()
    const target = event.target
    const titulo = target.querySelector('#titulo').value;
    const bodys = target.querySelector('#bodys').value;
  
    console.log(titulo);
    console.log(bodys);
    this.http.post('https://jsonplaceholder.typicode.com/posts', { titulo:titulo,bodys: bodys }).subscribe(res => {
     const agregaPosts:Posts= new Posts()
    agregaPosts.title=titulo;
    agregaPosts.body=bodys;
     this._Posts.unshift(agregaPosts)

    });

  }

}
