import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Product list");
});

router.post("/", (req, res) => {
    res.send("Add a product");
});

export default router;
