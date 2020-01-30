import {Component} from '@angular/core';
import {ImageMap} from './imageMapResizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImageApp';
  pigPart = '';

  AppComponent() {
    ImageMap('img[usemap]');
  }

  updatePigPart(part: string) {
    this.pigPart = part;
  }
}
