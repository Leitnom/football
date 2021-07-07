import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from './shared/header/header.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { LeagueComponent } from './pages/league/league.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PlayersComponent } from './pages/players/players.component';

const app_routes: Routes = [
    { path: '', component: LeaguesComponent },
    { path: 'leagues', component: LeaguesComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'payers', component: PlayersComponent },
    { path: 'leage/:id', component: LeagueComponent },
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