import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../album';
import { Artist } from '../../artist';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'artist',
    templateUrl: './app/components/artist/artist.component.html' 
})

export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist[];
    albums: Album[];
    constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {
    }
  
  ngOnInit(){
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getArtist(id)
         .subscribe(artist => {
            this.artist = artist;
         })
        
        this.spotifyService.getAlbum(id)
         .subscribe(albums => {
            this.albums = albums.items;
         })
      })
  }
}