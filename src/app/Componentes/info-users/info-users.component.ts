import { Component, OnInit } from '@angular/core';
import { Address } from '../../modules/Address';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Users } from '../../modules/Users';


@Component({
  selector: 'app-info-users',
  templateUrl: './info-users.component.html',
  styleUrls: ['./info-users.component.css']
})
export class InfoUsersComponent implements OnInit {
address:Array<Address>;
iduser:number;
user:Users;
  constructor(private ruta:ActivatedRoute, private http:Http) {
    this.ruta.params.subscribe(params => this.iduser = params["id"]); 
    this.http.get('https://jsonplaceholder.typicode.com/users/'+this.iduser).subscribe(resp => this.user = resp.json());

   }

  ngOnInit() {
  }

}
