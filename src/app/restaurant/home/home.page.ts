import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

enum COLORS {
  GREY = '#E0E0E0',
  GREEN = '#76FF03',
  Yellow = '#FFCA28',
  RED = '#DD2C00'
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public filterTab: string;
  public rating: number;
  public isOpen = true;

  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.rating = 4;
  }

  onClickTabs(tab: any) {
    console.log('tab = ', tab);
    this.filterTab = tab;
  }

  ratingChange(data: any) {
    console.log('emit = ', data);
  }

  onClickNotification() {
    console.log('notifications clicked.');
  }
  onCLickItem() {
    ///tabnav/tabnav/dashboard/restaurant-details
    this.navCtrl.navigateForward('/tabnav/tabnav/home/restaurant-details');
  }

  onClickCall(e) {
    e.stopPropagation();
    console.log('hi...!');
  }

}
