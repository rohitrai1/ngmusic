import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../album';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'album',
    templateUrl: './app/components/album/album.component.html' 
})

export class AlbumComponent {
    id: string;
    album: Album[];
    constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {
    }
  
  ngOnInit(){
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getAlbumDetails(id)
         .subscribe(album => {
            this.album = album;
         })
      })
  }
}