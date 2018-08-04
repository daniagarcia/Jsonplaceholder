import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Photos } from '../../modules/Photos';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  Photos:Array<Photos>;

  constructor(private ruta:ActivatedRoute, private http:Http) {
      this.ruta.params.subscribe(params => {
        this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(resp => this.Photos = resp.json());
      })

   }

  ngOnInit() {
  }

}