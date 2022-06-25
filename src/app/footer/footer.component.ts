import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grocery-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  @Input() version = '';

  constructor() {}

  ngOnInit(): void {
  }

}
