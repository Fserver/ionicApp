import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public deseosService: DeseosService, private router: Router) { }

}
