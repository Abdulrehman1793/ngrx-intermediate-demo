import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: ':userId', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonPlaceholderRoutingModule {}
