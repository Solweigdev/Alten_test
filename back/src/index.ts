import express from "express";
import cors from "cors";
import { config } from "~/config";

/** Controller */
import { ProductsController } from "~/resources/products/products.controller";

/** Create new app express */
const app = express();

/** Parse body to Json */
app.use(express.json());

/** Enable cors */
app.use(cors());

app.use("/api/v1/products", ProductsController);

/** Start server */
app.listen(config.API_PORT, () =>
    console.log(`Server is running on port ${config.API_PORT}`)
);
