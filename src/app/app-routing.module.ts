import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from './shared/header/header.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { LeagueComponent } from './pages/league/league.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PlayersComponent } from './pages/players/players.component';
import { TeamComponent } from "./pages/team/team.component";
import { PlayerComponent } from "./pages/player/player.component";
import { NewteamComponent } from "./pages/newteam/newteam.component";
import { EditeamComponent } from "./pages/editeam/editeam.component";
import { NewplayerComponent } from "./pages/newplayer/newplayer.component";
import { EditplayerComponent } from "./pages/editplayer/editplayer.component";

const app_routes: Routes = [
    { path: '', component: LeaguesComponent },
    { path: 'leagues', component: LeaguesComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'newteam', component: NewteamComponent },
    { path: 'editeam/:id', component: EditeamComponent },
    { path: 'newplayer', component: NewplayerComponent },
    { path: 'editplayer/:id', component: EditplayerComponent },
    { path: 'league/:id', component: LeagueComponent },
    { path: 'team/:id', component: TeamComponent },
    { path: 'player/:id', component: PlayerComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {

}