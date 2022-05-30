import { Component, OnInit } from '@angular/core';

import { ListComponent } from '../list/list.component';
import { ExpireComponent } from '../expire/expire.component';

@Component({
  selector: 'grocery-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
