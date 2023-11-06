import { Router } from "express";
import { ProductsService } from "./products.service";
import {
    SuccessResponse,
    CreatedResponse,
    NoContentResponse,
} from "~/utils/response";
import { BadRequestException, NotFoundException } from "~/utils/exception";

const ProductsController = Router();

const service = new ProductsService();

/**
 * @swagger
 *  /api/v1/products:
 *  get:
 *  summary: Get all products
 */
ProductsController.get("/", (req, res) => {
    console.log("Get all products");

    const products = service.getAllProducts();

    if (products.length === 0)
        return res.status(204).json(new NoContentResponse("No products found"));

    return res
        .status(200)
        .json(
            new SuccessResponse("Get all products", service.getAllProducts())
        );
});

/**
 * @swagger
 * /api/v1/products/{id}:
 * get:
 * summary: Get product by id
 * parameters:
 * name: id
 * required: true
 */
ProductsController.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id))
        return res
            .status(404)
            .json(new BadRequestException("ID is not a number"));

    const product = service.getProductById(id);

    if (!product)
        return res.status(404).json(new NotFoundException("Product not found"));

    return res.status(200).json(new SuccessResponse("Get product", product));
});

/**
 * @swagger
 * /api/v1/products:
 * post:
 * summary: Create new product
 * parameters:
 * name: product
 * required: true
 */
ProductsController.post("/", (req, res) => {
    const createProduct = service.createProduct(req.body);

    if (!createProduct)
        return res
            .status(400)
            .json(new BadRequestException("Product not created"));

    return res
        .status(201)
        .json(new CreatedResponse("Product created", createProduct));
});

/**
 * @swagger
 * /api/v1/products/{id}:
 * delete:
 * summary: Delete product by id
 * parameters:
 * name: id
 * required: true
 */
ProductsController.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id))
        return res
            .status(404)
            .json(new BadRequestException("ID is not a number"));

    service.deleteProduct(id);

    return res.status(200).json(new SuccessResponse("Delete product", id));
});

export { ProductsController };
