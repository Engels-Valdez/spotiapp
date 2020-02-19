import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service'
import {  map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  private artista: object = {};
  private topTracks:any [] = [];
  private linkRep = "https://open.spotify.com/embed/album";

  constructor(private _activatedRoute: ActivatedRoute, private _spotify: SpotifyService) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {

      this._spotify.getArtist(params['id'])
        .subscribe(artista => {
          //console.log(artista);

          this.artista = artista;

        })

      this._spotify.getTop(params['id'])
        .subscribe((tracks:any) => {
          //console.log(tracks);
          this.topTracks = tracks.tracks;
          //console.log(this.topTracks );
          
        })

    });

  }

}
