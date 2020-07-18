import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabnavPage } from './tabnav.page';


const routes: Routes = [
	{
		path: 'tabnav',
		component: TabnavPage,
		children: [
			{
				path: 'home',
				// children: [{
				// 	path: '',
				loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
				// }],
			},
			{
				path: 'dashboard',
				// children: [{
				// 	path: '',
				loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
				// }],
			},
			{
				path: 'profile',
				// children: [{
				// 	path: '',
				loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
				//loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
				// }],
			},
			{
				path: 'paymenthistory',
				loadChildren: () => import('../payment-history/payment-history.module').then(m => m.PaymentHistoryPageModule)
			},
			{
				path: 'home/restaurant-details',
				loadChildren: () => import('../restaurant-details/restaurant-details.module').then(m => m.RestaurantDetailsPageModule)
			},
			{
				path: '',
				redirectTo: '/tabnav/home',
				pathMatch: 'full'
			}
		]
	}, {
		path: '',
		redirectTo: '/tabnav/tabnav/home',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TabnavPageRoutingModule { }
