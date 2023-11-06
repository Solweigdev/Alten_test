import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { ProductsAdminComponent } from "./products-admin/products-admin.component";
import { ProductsComponent } from "./products/products.component";
import { RouterModule } from "@angular/router";
import { PRODUCT_ROUTES } from "./product.routes";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [ProductsAdminComponent, ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_ROUTES),
    TableModule,
    SharedModule,
  ],
})
export class ProductModule {}
