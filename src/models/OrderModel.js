const mongoose= require('mongoose')

const orderSchema=  new  mongoose.Schema({
  
  
    userId:{
        type:String,
        required:true
        
    },
    order_data: {
        type:Array,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }



},{timestamps:true})

module.exports= mongoose.model("Order",orderSchema)