import { Component, OnInit } from '@angular/core';
import { dummyOrders } from 'src/utility/dummy-json';

@Component({
  selector: 'all-orders',
  templateUrl: './all-orders-page.html',
  styleUrls: ['../orders.page.scss', '../../../../vendor/menu/menu-page.scss'],
})
export class AllOrdersPage implements OnInit {
  public ongoingTab: boolean = true;
  public pastTab: boolean = false;
  public orders = dummyOrders
  public completedOrders = [];
  public ongoingOrders = [];

  constructor() { }

  ngOnInit() {
    this.orders.map(order => {
      order.completed ? this.completedOrders.push(order) : this.ongoingOrders.push(order);
    })
   }

  onClickTabs = (tab: any) => {
    this.ongoingTab = tab === 'ongoing';
    this.pastTab = tab === 'past';
  }

}
