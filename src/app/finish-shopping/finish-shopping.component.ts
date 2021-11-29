import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-shopping',
  templateUrl: './finish-shopping.component.html',
  styleUrls: ['./finish-shopping.component.css']
})
export class FinishShoppingComponent implements OnInit {

  @Input() buttonType: string = 'button';
  @Input() pagePath: string = '';

  constructor() { }

  ngOnInit(): void {
  }



}
