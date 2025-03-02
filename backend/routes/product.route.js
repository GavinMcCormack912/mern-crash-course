import express from "express";
import { deleteProduct, getProducts, createProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

//Postman desktop application, use to test api methods

// create a route
router.post("/", createProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
