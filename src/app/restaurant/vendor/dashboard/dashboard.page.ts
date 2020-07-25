import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'
import { drawRoudedCornersForBarCharts, drawLabelInsideChart } from './charts.custom.config';
import { dummyOrders } from 'src/utility/dummy-json';
import { ToastController } from '@ionic/angular';
// import { isArray } from '../../../../utility/helper';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss', '../orders/orders.page.scss', '../../../../utility/common.scss'],
})
export class DashboardPage implements OnInit {
	@ViewChild('barChart') barChart: any;
	@ViewChild('pieChart') pieChart: any;
	public orders = dummyOrders.filter(order => !order.completed);
	// public orders = JSON.parse(JSON.stringify(dummyOrders));
	public timeline = ['Morning', 'Noon', 'Evening', 'Night']
	public selectedTimeline = '';
	public bars: any;
	public doughnut: any;
	public preparationTime = 20;
	constructor(public toastCtrl: ToastController) { }
	ngOnInit() {
		Chart.pluginService.register(drawLabelInsideChart);
		Chart.elements.Rectangle.prototype.draw = drawRoudedCornersForBarCharts;
	}

	ionViewDidEnter() {
		this.generateDueAndPaidPieChart();
		this.generateNoOfOrdersBarChart();
	}

	generateNoOfOrdersBarChart = () => {
		new Chart(this.barChart.nativeElement, {
			type: 'bar',
			data: {
				labels: ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm'],
				datasets: [{
					data: [15, 25, 30, 5, 8, 24, 30, 12],
					label: '# orders',
					backgroundColor: '#9860d4', // array should have same number of elements as number of dataset
					borderWidth: 1,
					barThickness: 10,
				}]
			},
			options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						gridLines: {
							display: false
						},
						barThickness: 15,
						ticks: {
							fontSize: 10,
							padding: -10
						}
					}],
					yAxes: [{
						gridLines: {
							display: false,
						},
						ticks: {
							beginAtZero: true,
							stepSize: 5,
							fontSize: 10
						}
					}]
				}
			}
		});
	}

	generateDueAndPaidPieChart = () => {
		new Chart(this.pieChart.nativeElement, {
			type: 'doughnut',
			animation: {
				animateScale: true
			},
			data: {
				labels: ['Dues', 'Paid'],
				datasets: [{
					data: [3, 6],
					backgroundColor: ['#8ddad5', '#ffee34'], // array should have same number of elements as number of dataset
					borderColor: ['#8ddad5', '#ffee34'],
					hoverBorderWidth: 10,
				}],
			},
			options: {
				responsive: true,
				cutoutPercentage: 80,
				legend: {
					position: 'bottom',
					labels: {
						display: true,
						usePointStyle: true,
						boxWidth: 5,
						fontSize: 10,
						padding: 30,
						fontColor: ['#8ddad5', '#ffee34']
					}
				}
			},
			centerText: {
				display: true,
				text: "280"
			}
		});
	}

	onStopAcceptingOrderClick = (event: any) => {
		this.showToast(`You have ${event.target.checked ? 'stopped' : 'started'} accepting orders`);
	}
	onOrderActionClick = (orderId, action) => {
		let message = `You ${action} order #${orderId}`;
		message = action === 'accepted' ? message + `and it will take ${this.preparationTime} minutes to preparae your delicious food.` : message;
		this.showToast(message);
		this.orders.shift();
	}
	onSetTimelineClick = (timeline: any) => {
		this.showToast(`${timeline} timeline set`);
	}
	onPreparationTimeClick = (action) => {
		this.preparationTime = action === 'add' ? this.preparationTime + 1 : this.preparationTime > 0 ? this.preparationTime - 1 : 0;
	}

	async showToast(message: string) {
		const toast = await this.toastCtrl.create({
			message,
			duration: 2000,
			position: 'bottom'
		});
		toast.present();
	}
};