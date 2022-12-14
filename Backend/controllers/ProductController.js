const {Product} = require('./../Model/ProductModel');
const APIFeatures = require ('.././Utils/ApiFeature');

exports.getAllProduct= async (req, res) => 
{ 
    try
    {
         
        const features = new APIFeatures(Product.find(),req.query).filter().sort().paginate()
        const product = await features.query;

       //SEND RESPONSE
        res
        .status(202)
        .json({
            status: 'Success',
            result: product.length,
            data: { product }
        });
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send('Server error');
        return;
    }   
}
exports.getProductById = async (req, res) => 
{
    try
    {
        const id = req.params.id;
        const product = await Product.findById(id);
        res
       .status(202)
       .json({
            status: 'Success',
            result: product,
            data: { product }
       })    
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).json({
                         status: 'Error',
                         message: 'Invalid Product'

    })
}
}   
exports.createProduct = async (req, res)=> 
{   
    try {
    const newProduct = await Product.create(req.body)
    console.log(newProduct)
            res.status(202).json({
            status: 'Success',
            data: {
                Product : newProduct
            }
        });
    } 
    catch (error) 
    {
        res.status(404).json({
                    status: 'Error',
                    message: 'Invalid Product'
                })
    }

}
exports.updateProduct = async (req, res) => {

    try
    {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id,req.body,{
            new : true
        })
        res
       .status(202)
       .json({
            status: 'Success',
            data: { product }
       })    
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).json({
                         status: 'Error',
                         message: 'Invalid Product'

    })
} 
}
exports.deleteProduct = async (req, res) => {

    try
    {
        const id = req.params.id;
        const product = await Product.findByIdAndRemove(id,req.body)
        res
       .status(202)
       .json({
            status: 'Success',
            data: null
       })    
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).json({
                         status: 'Error',
                         message: 'Invalid Product'

    })
} 
}