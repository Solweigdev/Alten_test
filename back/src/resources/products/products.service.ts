import type { Product } from "~/interfaces/products";
import { products } from "~/db/data";

export class ProductsService {
    products: Product[] = products;

    getAllProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find((product) => product.id === id);
    }

    createProduct(product: Product): Product {
        const lastProduct = this.products[this.products.length - 1];

        const newProduct = {
            ...product,
            id: lastProduct.id + 1,
        };

        this.products.push(newProduct);

        return newProduct;
    }

    deleteProduct(id: number): void {
        const index = this.products.findIndex((product) => product.id === id);
        this.products.splice(index, 1);
    }
}
