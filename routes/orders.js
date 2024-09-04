const express = require("express");
const router = express.Router();

// Import Controller
const {addOrder, updateOrder, deleteOrder, getOrders, getOrderByProduct}=require("../controllers/orderController");
// APIs Routing Config
    router.post('/orders',addOrder);
    router.put('/orders/:id',updateOrder);
    router.delete('/orders/:id',deleteOrder);
    router.get('/orders',getOrders);
    router.get('/orders/:product',getOrderByProduct);

// Export router
module.exports = router;
