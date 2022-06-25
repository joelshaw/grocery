import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PantryService } from './pantry.service';
import packageInfo from '../../package.json';

@Component({
  selector: 'grocery-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'The Pantry';

    @Output() version = new EventEmitter<string>();
    appVersion = packageInfo.version;
    
    ngOnInit(): void {
      console.log('Version: ' + this.appVersion);
    }
}
