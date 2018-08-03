import { Component, OnInit } from '@angular/core';
import { Albums } from '../../modules/Albums';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {

  Albums:Array<Albums>;
  //

  constructor(private ruta:ActivatedRoute, private http:Http) { 
    this.ruta.params.subscribe(params => {
      this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(resp => this.Albums = resp.json());
    })
  }

  ngOnInit() {
  }

}
