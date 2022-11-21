import ProductsDAOMongo from "../DAO/product/ProductsDAOMongo.js";
import ProductsDAOFile from "../DAO/product/ProductsDAOFile.js";
import ProductsDAOMemory from "../DAO/product/ProductsDAOMemory.js";

// const productsDAO = new ProductsDAOMongo();
let productsDAO;
switch (process.env.PERS) {
    case "mongodb":
        productsDAO = ProductsDAOMongo.createInstance();
        break;
    case "file":
        productsDAO = ProductsDAOFile.createInstance();
        break;
    case "memory":
        productsDAO = ProductsDAOMemory.createInstance();
        break;
    default:
        productsDAO = ProductsDAOMongo.createInstance();
        break;
};

async function getProducts() {
    return await productsDAO.listAll();
};

async function getProductById(id) {
    productsDAO.list(id);
};

async function addProduct(title, price, thumbnail) {
    let savedProduct = await productsDAO.save({ title: title, price: price, thumbnail: thumbnail, quantity: 1 })
    return savedProduct;
};

async function updateProduct(id, title, price, thumbnail, quantity) {
    let updatedProduct = await productsDAO.update({ id: id, title: title, price: price, thumbnail: thumbnail, quantity: quantity });
    return updatedProduct;
};

async function deleteProduct(id) {
    return await productsDAO.delete(id);
};

export { getProducts, getProductById, addProduct, updateProduct, deleteProduct };