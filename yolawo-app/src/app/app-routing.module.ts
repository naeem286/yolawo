import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent} from "./template-driven/template-driven.component";
import { ReactiveComponent} from "./reactive/reactive.component";
import { HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'template-driven-form', component: TemplateDrivenComponent},
  { path: 'reactive-form', component:ReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
