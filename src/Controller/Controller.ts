import product_model from '../Modal/Product_info';
const product = product_model();

exports.NotFound = (req: any, res: any) => res.send({ message: 'invalid URL!' });

exports.insertProduct = async (req: any, res: any) => {

    const data = new product({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    });

    const result = await data.save();

    res.send({ message: "new Product has been added", result });
}

exports.listProduct = async (req: any, res: any) => {

    const data = await product.find();
    data.length ? res.send({ Message: "Available Product data", data }) : res.send({ message: "No Product data to display" });
}