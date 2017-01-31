import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchComponent }  from './components/search/search.component';
import { AboutComponent }  from './components/about/about.component';
import {appRouterProviders} from './app.routes';
import { ArtistComponent }  from './components/artist/artist.component';
import { AlbumComponent }  from './components/album/album.component';
import { HttpModule }  from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, appRouterProviders, HttpModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, SearchComponent, AboutComponent, ArtistComponent, AlbumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 