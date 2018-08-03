import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Photos } from '../../modules/Photos';

@Component({
  selector: 'app-info-album',
  templateUrl: './info-album.component.html',
  styleUrls: ['./info-album.component.css']
})
export class InfoAlbumComponent implements OnInit {
  albumesarray:Array<Photos>;
  numablum:number;

  constructor(private ruta:ActivatedRoute, private http:Http) {
    this.ruta.params.subscribe(params => this.numablum = params["id"]); 
      this.http.get('https://jsonplaceholder.typicode.com/albums/'+this.numablum+'/photos').subscribe(resp => this.albumesarray = resp.json());
  }
  
  
  ngOnInit() {
  }

}
