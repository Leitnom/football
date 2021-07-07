import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PlayersComponent } from './pages/players/players.component';
import { LeagueComponent } from './pages/league/league.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeaguesComponent,
    TeamsComponent,
    PlayersComponent,
    LeagueComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
