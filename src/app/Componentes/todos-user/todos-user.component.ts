import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Todos } from '../../modules/Todos';

@Component({
  selector: 'app-todos-user',
  templateUrl: './todos-user.component.html',
  styleUrls: ['./todos-user.component.css']
})
export class TodosUserComponent implements OnInit {
todosUser:Array<Todos>;
iduser:number;
  constructor(private ruta:ActivatedRoute, private http:Http) {
    this.ruta.params.subscribe(params => this.iduser = params["id"]); 
    this.http.get('https://jsonplaceholder.typicode.com/users/'+this.iduser+'/todos').subscribe(resp => this.todosUser = resp.json());
   }

  ngOnInit() {
  }
  
}
