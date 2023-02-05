import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PockedexPageComponent } from './pages/pockedex-page/pockedex-page.component';
import { PockemonDetailComponent } from './pages/pockemon-detail/pockemon-detail.component';

const routes: Routes = [
  {path:'', component: PockedexPageComponent},
  {path:'PockemonDetailComponent', component: PockemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
