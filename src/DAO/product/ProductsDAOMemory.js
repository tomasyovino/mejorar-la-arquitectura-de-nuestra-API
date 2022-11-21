import MemoryContainer from "../../containers/MemoryDBContainer.js";

let instance = null;

class ProductsDAOMemory extends MemoryContainer {
    static createInstance() {
        if (!instance) {
            instance = new ProductsDAOMemory();
        }
    }
}

export default ProductsDAOMemory;