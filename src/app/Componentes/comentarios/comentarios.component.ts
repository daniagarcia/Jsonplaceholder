import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';
import { Comments } from '../../modules/Comments';



@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})

export class ComentariosComponent implements OnInit {
  Comments: Array<Comments>;
  identificador:number;

  constructor(private ruta:ActivatedRoute, private http:Http) {
      this.ruta.params.subscribe(params=>{
    //  this.identificador= params['id'];
      this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(resp => this.Comments = resp.json());
    })

   }

  ngOnInit() {
  }

}
