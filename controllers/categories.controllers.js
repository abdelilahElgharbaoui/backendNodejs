const Category = require("../models/Category");

async function getAllCategories(req,res){
    try{
 const category = await Category.find();
 res.status(200).json(category);
    }catch(error){
        res.status(500).send('erreur dans le serveur');
    }
    
}

async function getCategoryById(req,res){
    try{
    const idP = req.params.id;
    const category = await Category.findById(idP);
    res.status(200).json(category);
    }catch(error){
        res.status(500).send('erreur dans le serveur');
    }
   

}

async function addCategory(req,res){
    try{
    const category = await Category.create(req.body); 
    res.status(201).json(category);
    }catch(error){
        res.status(500).send("erreur d'ajout");
    }
}


async function deleteCategoryById(req,res){
    try{
    const idP = req.params.id;
    const category = await Category.findByIdAndDelete(idP);
    res.status(200).json(category);

}catch(error){
    res.status(500).send("erreur de suppression");
}

}

async function updateCategory(req,res){
    try{
    const idP = req.params.id;
    await Category.findByIdAndUpdate(idP,req.body);
    res.satus(200).json("Le produit est bien modifiee");
}catch(error){
    res.status(500).send("erreur dans le serveur");
}
}


module.exports={getAllCategories,getCategoryById,addCategory,deleteCategoryById,updateCategory};