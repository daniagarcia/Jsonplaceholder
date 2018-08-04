import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Photos } from '../../modules/Photos';

@Component({
  selector: 'app-fotos-album',
  templateUrl: './fotos-album.component.html',
  styleUrls: ['./fotos-album.component.css']
})
export class FotosAlbumComponent implements OnInit {
  fotosAlbum:Array<Photos>;
  idalbum:number;
  constructor(private ruta:ActivatedRoute, private http:Http) { 
    this.ruta.params.subscribe(params => this.idalbum = params["id"]); 
    this.http.get('https://jsonplaceholder.typicode.com/albums/'+this.idalbum+'/photos').subscribe(resp => this.fotosAlbum = resp.json());
  }

  ngOnInit() {
  }

}
