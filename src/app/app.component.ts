import { Component, VERSION } from '@angular/core';
import { Constant } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private constant: Constant) { }

  title = 'Penote';
  version = VERSION;
}
