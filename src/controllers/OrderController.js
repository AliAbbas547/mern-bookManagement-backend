const orderModel= require("../models/OrderModel")
const aws= require("../AWS/aws")

const createOrderData= async function(req,res){

try{
    let cartData= req.body
    console.log(cartData)
    let storeCartData= await orderModel.create(cartData)
    return res.status(201).send({status:true,data:storeCartData})

}
catch(err){
    return res.status(500).send({status:false,message:err.message})
}

}


const getCartData= async function(req,res){
try{
    let userId= req.query.userId
    console.log(userId)
    let cartData= await orderModel.find({userId:userId})
    console.log(cartData)
    return res.status(200).send({status:true,data:cartData})

}
catch(err){
    return res.status(500).send({status:false,message:err.message})
}
}

const getFile= async function(req,res){
 
 try{
    let uploadedFileURL;
    let files = req.files
    console.log(files[0])
    if (files && files.length > 0) {
      uploadedFileURL = await aws.uploadFile(files[0]);
    } else {
      return res.status(400).send({ msg: "No Profile image is found" });
    }
   // console.log(uploadedFileURL)

 }
 catch(err){
    return res.status(500).send({status:false,message:err.message})
 }

}


module.exports= {createOrderData,getCartData,getFile}