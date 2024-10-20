import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/gs-api/src/services';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';


@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {
  @Input() UtilisateurDto!: UtilisateurDto;

  constructor() { }

  ngOnInit(): void {
  }

}
