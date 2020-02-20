import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  artistas:any[];

  private token:string = 'BQBRNsfg0XVlKDGkOU-G880WvQBl-D7VWdqtbGCB3ACjvZUp0n_E3DtHDijeGuLD8k9TdVv3FXDjcS0tIDo';

  constructor( public http:HttpClient ) {
        
      console.log('Servicio listo para usar');
      

   }

   getArtista( termino:string ){

      if(termino.length < 1 ){

        return;

      }

      let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&market=US&offset=0&limit=20`;

      let headers = new HttpHeaders({
        'authorization' : `Bearer ${this.token}`
      });

      this.http.get(url, { headers })
                          .subscribe( (data:any) =>{
                              //console.log(data);
                              this.artistas = data.artists.items;
                            } )
                
      }      
      
      getArtist( id:string ){

        if( id.length < 1 ){

          return

        }
        
        let url = `https://api.spotify.com/v1/artists/${id}`

        let headers = new HttpHeaders({ 

          'authorization' : `Bearer ${this.token}`

        });
        
        return this.http.get( url, {headers} )
        
      }

      getTop( id:string ){

    
        let url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`

        let headers = new HttpHeaders({

          'authorization' : `Bearer ${this.token}`

        });

        return this.http.get(url, { headers });

      }
                
   }


