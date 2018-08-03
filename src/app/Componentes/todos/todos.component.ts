import { Component, OnInit } from '@angular/core';
import { Todos } from '../../modules/Todos';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  Todos:Array<Todos>;

  constructor(private ruta:ActivatedRoute, private http:Http) {
    this.ruta.params.subscribe(params =>{
      this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(resp => this.Todos = resp.json());
    })
   }

  ngOnInit() {
  }

}
