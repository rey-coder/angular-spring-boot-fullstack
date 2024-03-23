import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HelloComponent } from './pages/hello/hello.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
