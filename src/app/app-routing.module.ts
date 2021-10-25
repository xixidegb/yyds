import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
    ///loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)

  },
  {
    path: 'tabs', 
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then( m => m.ShoppingListPageModule)
  },
  {
    path: 'staple',
    loadChildren: () => import('./staple/staple.module').then( m => m.StaplePageModule)
  },
  {
    path: 'man1',
    loadChildren: () => import('./man1/man1.module').then( m => m.Man1PageModule)
  },
  {
    path: 'man2',
    loadChildren: () => import('./man2/man2.module').then( m => m.Man2PageModule)
  },
  {
    path: 'man3',
    loadChildren: () => import('./man3/man3.module').then( m => m.Man3PageModule)
  },
  {
    path: 'woman1',
    loadChildren: () => import('./woman1/woman1.module').then( m => m.Woman1PageModule)
  },
  {
    path: 'woman2',
    loadChildren: () => import('./woman2/woman2.module').then( m => m.Woman2PageModule)
  },
  {
    path: 'woman3',
    loadChildren: () => import('./woman3/woman3.module').then( m => m.Woman3PageModule)
  },
  {
    path: 'child1',
    loadChildren: () => import('./child1/child1.module').then( m => m.Child1PageModule)
  },
  {
    path: 'child2',
    loadChildren: () => import('./child2/child2.module').then( m => m.Child2PageModule)
  },
  {
    path: 'child3',
    loadChildren: () => import('./child3/child3.module').then( m => m.Child3PageModule)
  },
  {
    path: 'elderly1',
    loadChildren: () => import('./elderly1/elderly1.module').then( m => m.Elderly1PageModule)
  },
  {
    path: 'elderly2',
    loadChildren: () => import('./elderly2/elderly2.module').then( m => m.Elderly2PageModule)
  },
  {
    path: 'elderly3',
    loadChildren: () => import('./elderly3/elderly3.module').then( m => m.Elderly3PageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'combodetail',
    loadChildren: () => import('./combodetail/combodetail.module').then( m => m.CombodetailPageModule)
  },
  {
    path: 'man4',
    loadChildren: () => import('./man4/man4.module').then( m => m.Man4PageModule)
  },
  {
    path: 'woman4',
    loadChildren: () => import('./woman4/woman4.module').then( m => m.Woman4PageModule)
  },
  {
    path: 'child4',
    loadChildren: () => import('./child4/child4.module').then( m => m.Child4PageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'elderly4',
    loadChildren: () => import('./elderly4/elderly4.module').then( m => m.Elderly4PageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
