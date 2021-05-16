import { Component } from '@angular/core';
import { Colores } from './categories/categories.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  colores = Colores
  constructor() {}
}


