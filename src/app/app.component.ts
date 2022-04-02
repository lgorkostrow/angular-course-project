import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from "./core/services/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private configService: ConfigService
  ) {
  }

  ngOnInit(): void {
    this.configService.initialize(
      {id: 12, fullName: 'Vasya Pupkin', email: 'vasya@gmail.com'}
    );
  }
}
