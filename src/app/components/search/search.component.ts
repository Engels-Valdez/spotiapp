import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino:string;

  constructor( public _spotify:SpotifyService ) { 
          

  }

  ngOnInit() {
  }

  getArtistas( ){
    this._spotify.getArtista( this.termino );
  }

}
