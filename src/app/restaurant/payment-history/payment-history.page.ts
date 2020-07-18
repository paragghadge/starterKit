import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {
  public allTab: boolean = true;
  public paidTab: boolean = false;
  public dueTab: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onClickTabs(tab: any) {
    this.allTab = tab === 'All' ? true : false;
    this.paidTab = tab === 'Paid' ? true : false;
    this.dueTab = tab === 'Dues' ? true : false;
  }

}
