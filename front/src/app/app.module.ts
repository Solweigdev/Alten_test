import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeEn from "@angular/common/locales/en";
import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "app/app-routing.module";
import { AppComponent } from "app/app.component";
import { BaseModule } from "app/base/base.module";
import { SharedModule } from "app/shared/shared.module";
import { ProductModule } from "./features/product/product.module";
import { ProductService } from "service/productservice";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    BaseModule,
    ProductModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "en" }, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEn, "en");
  }
}
