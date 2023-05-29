import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormpageComponent } from './formpage/formpage.component';
import { SuccesspageComponent } from './successpage/successpage.component';

const routes: Routes = [
  { path: '', component: FormpageComponent },
  { path: 'success', component: SuccesspageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
