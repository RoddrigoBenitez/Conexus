import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Order list");
});

router.post("/", (req, res) => {
    res.send("Create a new order");
});

export default router;
