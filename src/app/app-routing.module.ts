import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

const routes: Routes = [];

@NgModule({
  declarations: [EmptyRouteComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
