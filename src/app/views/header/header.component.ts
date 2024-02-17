import { NgModule,Component, ViewChild } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [MatMenuModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {


}



