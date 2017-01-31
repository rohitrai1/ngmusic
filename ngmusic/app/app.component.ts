import { NavbarComponent }  from './components/navbar/navbar.component'
import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [ SpotifyService ]
  })
export class AppComponent  { }
