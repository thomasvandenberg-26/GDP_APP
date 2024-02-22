import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { appConfig } from '../../app.config';
import { Toolbar, ToolbarModule } from 'primeng/toolbar';
import { SplitButton, SplitButtonModule } from 'primeng/splitbutton';
import { SplitButtonTemplates } from 'primeng/splitbutton';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule, ToolbarModule, SplitButtonModule],
  templateUrl: './header.component.html',
  styles: [
    `
      p-tabMenu{
        background-color : #121212;
      }
    `
  ]
})
export class HeaderComponent {


  gfg: MenuItem[] = [];
 items : SplitButtonTemplates[] = [];
  ngOnInit() {

    this.gfg = [
      {
        routerLink: '',
        label: 'MESI',

      },
      {
        routerLink : "articles",
        label: 'Nos Articles'

      },
      {
        routerLink :"inscription",
        label: 'Inscription'
      },
      {
        label: 'Exemple'
      }
    ];


  }
}
