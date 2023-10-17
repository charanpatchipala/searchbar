import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: 'home', component: SearchbarComponent },
  { path: 'form', component: FormComponent },
  { path: 'child', component: ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
