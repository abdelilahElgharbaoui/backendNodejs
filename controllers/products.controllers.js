const Product = require("../models/Product");

async function getAllProducts(req,res){
    try{
 const product = await Product.find().populate("category");
 res.status(200).json(product);
    }catch(error){
        res.status(500).send('erreur dans le serveur');
    }
    
}

async function getProductById(req,res){
    try{
    const idP = req.params.id;
    const product = await Product.findById(idP).populate("category");
    res.status(200).json(product);
    }catch(error){
        res.status(500).send('erreur dans le serveur');
    }
   

}

async function addProduct(req,res){
    try{
    const product = await Product.create(req.body); 
    res.status(201).json(product);
    }catch(error){
        res.status(500).send("erreur d'ajout");
    }
}


async function deleteProductById(req,res){
    try{
    const idP = req.params.id;
    const product = await Product.findByIdAndDelete(idP);
    res.status(200).json(product);

}catch(error){
    res.status(500).send("erreur de suppression");
}

}

async function updateProduct(req,res){
    try{
    const idP = req.params.id;
    await Product.findByIdAndUpdate(idP,req.body);
    res.status(200).json("Le produit est bien modifiee");
}catch(error){
    res.status(500).send("erreur dans le serveur"+error);
}
}


module.exports={getAllProducts,getProductById,addProduct,deleteProductById,updateProduct};