import { ProductsAdminComponent } from "./products-admin/products-admin.component";
import { ProductsComponent } from "./products/products.component";

export const PRODUCT_ROUTES = [
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "admin/products",
    component: ProductsAdminComponent,
  },
];
