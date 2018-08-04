import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Albums } from '../../modules/Albums';

@Component({
  selector: 'app-album-users',
  templateUrl: './album-users.component.html',
  styleUrls: ['./album-users.component.css']
})
export class AlbumUsersComponent implements OnInit {
  abumsUser:Array<Albums>;
  iduser:number;

  constructor(private ruta:ActivatedRoute, private http:Http) { 
    this.ruta.params.subscribe(params => this.iduser = params["id"]); 
    this.http.get('https://jsonplaceholder.typicode.com/users/'+this.iduser+'/albums').subscribe(resp => this.abumsUser = resp.json());
 
  }

  ngOnInit() {
  }

}
