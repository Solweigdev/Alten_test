import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const APP_ROUTES: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: "legacy" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
