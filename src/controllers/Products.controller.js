import { getProducts, getProductById, addProduct, updateProduct, deleteProduct } from "../services/product.services.js";

async function getProductsController() {
    return await getProducts();
};

async function getProductByIdController(id) {
    return await getProductById(id)
}

async function addProductController(title, price, thumbnail) {
    return await addProduct(title, price, thumbnail);
};

async function updateProductController(id, title, price, thumbnail, quantity) {
    return await updateProduct(id, title, price, thumbnail, quantity);
};

async function deleteProductController(id) {
    return await deleteProduct(id);
};

export { getProductsController, getProductByIdController, addProductController, updateProductController, deleteProductController };