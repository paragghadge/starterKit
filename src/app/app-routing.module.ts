import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
	},
	{
		path: 'signup',
		loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
	},
	{
		path: 'forgot-password',
		loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
	},
	{
		path: 'user-address',
		loadChildren: () => import('./user-address/user-address.module').then(m => m.UserAddressPageModule)
	},
	{
		path: 'address-modal',
		loadChildren: () => import('./modals/address-modal/address-modal.module').then(m => m.AddressModalPageModule)
	},
	{
		path: 'add-shop-details',
		loadChildren: () => import('./vendor/add-shop-details/add-shop-details.module').then(m => m.AddShopDetailsPageModule)
	},
	{
		path: 'subscription-plan',
		loadChildren: () => import('./vendor/subscription-plan/subscription-plan.module').then(m => m.SubscriptionPlanPageModule)
	},
	{
		path: 'service-items',
		loadChildren: () => import('./vendor/service-items/service-items.module').then(m => m.ServiceItemsPageModule)
	},
	{
		path: 'tabnav',
		loadChildren: () => import('./restaurant/tabnav/tabnav.module').then(m => m.TabnavPageModule)
	},
	{
		path: 'items-modal',
		loadChildren: () => import('./restaurant/modals/items-modal/items-modal.module').then(m => m.ItemsModalPageModule)
	},  {
    path: 'home',
    loadChildren: () => import('./restaurant/home/home.module').then( m => m.HomePageModule)
  },


];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
