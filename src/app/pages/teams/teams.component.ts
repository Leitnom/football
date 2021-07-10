import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any[] =[];

  constructor(private football: FootballService, private route: Router, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private messageService: MessageService) {

  }

  cargardatos() {
    this.football.getTeams().subscribe((data: any) => {
      let teams: any[] = [];
      for (let i = 0; i < data.length; i++) {
        let team = data[i] as any;
        teams.push(team);
      }
      this.teams = teams;
    }, (error) => {
      console.log(error);
    });
  }

  confirm(team: any) {
    this.confirmationService.confirm({
      message: '¿Quieres borrar este registro?',
      header: 'Confirma la eliminacion!',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.football.deleteTeam(team).subscribe(data => {
          this.cargardatos();
          this.confirmationService.close();
          this.messageService.add({ key: 'myKey2', severity: 'success', summary: 'Exito', detail: 'Team eliminado con exito' });
        },
          error => {
            this.confirmationService.close();
            this.messageService.add({ key: 'myKey2', severity: 'error', summary: 'Error!', detail: 'No se pudo eliminar' });
          })
      },
      reject: () => {
        this.confirmationService.close();
      }
    });
  }

  ngOnInit(): void {
    this.cargardatos();
    this.primengConfig.ripple = true; 
  }

}
