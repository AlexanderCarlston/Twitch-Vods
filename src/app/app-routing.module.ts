import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoveryPageComponent } from './pages/discovery-page/discovery-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/discover', pathMatch: 'full'
  }, 
  {
    path: '**',
    component: DiscoveryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
