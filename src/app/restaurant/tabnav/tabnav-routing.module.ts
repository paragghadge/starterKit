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
				// loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
				// }],
			},
			{
				path: 'profile/faq',
				loadChildren: () => import('../../faq/faq.module').then(m => m.FaqPageModule)
			},
			{
				path: 'profile/support',
				loadChildren: () => import('../../support/support.module').then(m => m.SupportPageModule)
			},
			{
				path: 'profile/privacy-policy',
				loadChildren: () => import('../../privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
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
				path: 'vendor/dashboard',
				loadChildren: () => import('../../restaurant/vendor/dashboard/dashboard.module').then(m => m.DashboardPageModule)
			},
			{
				path: 'vendor/orders',
				loadChildren: () => import('../../restaurant/vendor/orders/orders.module').then(m => m.OrdersPageModule)
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
