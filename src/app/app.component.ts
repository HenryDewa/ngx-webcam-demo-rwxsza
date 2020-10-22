import {Component} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // latest snapshot
  public webcamImage: WebcamImage = null;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
}
