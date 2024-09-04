// Import Model
    const Orders = require('../models/orders');
// Function add and export
    exports.addOrder =async (req,res)=>{
        const {customer_name, product, quantity, order_Date,status}=req.body;
        const order = new Orders (req.body);
        try{
            const newOrder = await order.save();
            res.status(201).json (newOrder);       
         }catch(err){
            res.status(401).json ({message: err.message});
         }
    }
// Function update and export
    exports.updateOrder = async (req,res)=>{
        try{const { id } = req.params;
        const updatedData = req.body;
        const updatedOrder = await Orders.findByIdAndUpdate(id, updatedData);
        
        if(!updatedOrder){
            return res.status(404).json({message:'Product not found'});  
          }return res.status(200).json({message:'Product updated successfully', order: updatedOrder});

        }catch (error){
            res.status(500).json ({message: 'Error updating order',error});
        }
    }
// Function delete and export
exports.deleteOrder = async (req,res)=>{
    try{const { id } = req.params;
    const deleteOrder = await Orders.findByIdAndDelete(id);
    
    if(!deleteOrder){
        return res.status(404).json({message:'Product not found'});  
      }return res.status(200).json({message:'Product deleted successfully', order: deleteOrder});

    }catch (error){
        res.status(500).json ({message: 'Error deleting order',error});
    }
}
// Function get all data and export
exports.getOrders = async (req,res)=>{
    try{
        const orders = await Orders.find();
        res.status(200).json (orders);
    }catch (error){
        res.status(500).json({message:error.message});
    }
}
// Function get data by product and export
exports.getOrderByProduct = async (req,res)=>{
    try{const { product } = req.params;
    const getOrderByProduct = await Orders.findOne({product});
    
    if(!getOrderByProduct){
        return res.status(404).json({message:'Product not found'});  
      }return res.status(200).json(getOrderByProduct);

    }catch (error){
        res.status(500).json ({message: 'Error finding order',error});
    }
}