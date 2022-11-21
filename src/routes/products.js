import { Router } from "express";
import { getProductsController, getProductByIdController, addProductController, updateProductController, deleteProductController } from "../controllers/Products.controller.js";
import { errorLogger } from "../utils/loggers.js";

const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
    try {
        let products = await getProductsController();
        res.send(products);
    } catch (err) {
        errorLogger.error(err);
    }
});

productsRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let product = await getProductByIdController(id);
        res.send(product);
    } catch (err) {
        errorLogger.error(err);
    }
});

productsRouter.post("/", async (req, res) => {
    try {
        const { title, price, thumbnail } = req.body;
        let savedProduct = await addProductController(title, price, thumbnail);
        res.send(savedProduct);
    } catch (err) {
        errorLogger.error(err);
    }
});

productsRouter.put("/", async (req, res) => {
    const { id, title, price, thumbnail, quantity } = req.body;
    const product = await updateProductController(id, title, price, thumbnail, quantity);
    res.send(product);
});

productsRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    res.send(deleteProductController(id));
});

export default productsRouter;