import { Component } from '@angular/core';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {


  constructor() {}

  selectTheme(theme: string) {

    console.log('Selected theme:', theme);

  }
}
