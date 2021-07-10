import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-editeam',
  templateUrl: './editeam.component.html',
  styleUrls: ['./editeam.component.css']
})
export class EditeamComponent implements OnInit {

  editTeam = new FormGroup({
    LogodelEquipo: new FormControl('', Validators.required),
    Nombredelequipo: new FormControl('', Validators.required),
    Liga: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)
  });

  leagues: any;
  team: any;
  
  constructor(private football: FootballService, private activatedRoute: ActivatedRoute, private route: Router, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private messageService: MessageService) {
    this.activatedRoute.params.subscribe(params => {
      this.football.getTeamById(params.id).subscribe((data: any) => {
        this.team = data[0];
        this.editTeam.setValue({
          'Nombredelequipo': this.team.Nombredelequipo,
          'id': this.team.id,
          'LogodelEquipo': this.team.LogodelEquipo,
          'Liga': this.team.Liga
        });
      }, (error) => {
        console.log(error);
      });
    })

    this.football.getLeagues().subscribe((data: any) => {
      this.leagues = data;
    }, (error) => {
      console.log(error);
    });

  }

  ngOnInit(): void {
  }

  editForm(form: any) {
    this.football.editTeam(form).subscribe(data => {
      this.messageService.add({ key: 'myKey2', severity: 'success', summary: 'Exito', detail: 'Team editado con exito' });
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.route.navigate(['/teams'])
      }, 1000);
    },
      error => {
        this.messageService.add({ key: 'myKey2', severity: 'error', summary: 'Error!', detail: 'No se pudo editar' });
        setTimeout(() => {                           // <<<---using ()=> syntax
          this.route.navigate(['/teams'])
        }, 1000);
      })
  }
}
