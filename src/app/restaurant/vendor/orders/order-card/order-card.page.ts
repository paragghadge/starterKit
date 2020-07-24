import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'order-card',
  templateUrl: './order-card.page.html',
  styleUrls: ['../orders.page.scss'],
})

export class OrderCard implements OnInit {

  @Input('order') order:object;

  constructor() { }

  ngOnInit() { }

}